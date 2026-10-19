import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs/promises';

const stage = process.argv[2] ?? 'after';
const origin = process.env.QA_ORIGIN ?? 'http://localhost:3100';
const routes = process.env.QA_ROUTES?.split(',') ?? ['/', '/especialidades', '/proyectos', '/experiencia', '/certificaciones', '/sobre-mi', '/contacto', '/proyectos/principal-ai-assistant', '/proyectos/scientific-research-ai'];
const sizes = [[390, 844], [768, 1024], [1440, 900], [1920, 1080]].filter(([width]) => !process.env.QA_WIDTHS || process.env.QA_WIDTHS.split(',').includes(String(width)));
const browser = await chromium.launch({ channel: 'chrome', headless: true });
const directory = `qa-artifacts/${stage}`;
await fs.mkdir(directory, { recursive: true });
const partial = process.env.QA_ROUTES || process.env.QA_WIDTHS;
const results = partial ? JSON.parse(await fs.readFile(`${directory}/results.json`, 'utf8').catch(() => '[]')) : [];
try {
  for (const [width, height] of sizes) {
    for (const theme of ['dark', 'light']) {
      const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' });
      await context.addInitScript(value => localStorage.setItem('theme', value), theme);
      for (const route of routes) {
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
        const response = await page.goto(origin + route);
        await page.waitForLoadState('networkidle');
        await page.evaluate(() => document.fonts.ready);
        await page.locator('main img').evaluateAll(async images => {
          images.forEach(img => { img.loading = 'eager'; });
          await Promise.all(images.map(img => Promise.race([img.decode().catch(() => {}), new Promise(resolve => setTimeout(resolve, 8000))])));
        });
        const layout = await page.evaluate(() => {
          const heading = document.querySelector('main h1')?.getBoundingClientRect();
          const header = document.querySelector('header')?.getBoundingClientRect();
          return {
            overflow: document.documentElement.scrollWidth > innerWidth,
            headingObscured: heading && header ? heading.top < header.bottom : false,
            brokenImages: [...document.images].filter(image => !image.complete || image.naturalWidth === 0).map(image => image.currentSrc),
            overflowingElements: [...document.querySelectorAll('main *')].filter(el => el.getBoundingClientRect().right > innerWidth + 1).slice(0, 8).map(el => ({ tag: el.tagName, text: el.textContent?.slice(0, 80) })),
          };
        });
        const slug = route === '/' ? 'inicio' : route.slice(1).replaceAll('/', '--');
        const filename = `${width}-${theme}-${slug}.png`;
        await page.screenshot({ path: `${directory}/${filename}`, fullPage: true, animations: 'disabled' });
        const a11y = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
        const previous = results.findIndex(result => result.route === route && result.width === width && result.theme === theme);
        if (previous >= 0) results.splice(previous, 1);
        results.push({ route, width, height, theme, status: response.status(), screenshot: filename, layout, errors, violations: a11y.violations.map(v => ({ id: v.id, impact: v.impact, description: v.description, nodes: v.nodes.map(n => ({ target: n.target, summary: n.failureSummary })) })) });
        console.log(stage, width, theme, route, 'overflow=' + layout.overflow, 'a11y=' + a11y.violations.length, 'errors=' + errors.length);
        await page.close();
      }
      await context.close();
    }
  }
} finally {
  await fs.writeFile(`${directory}/results.json`, JSON.stringify(results, null, 2));
  await browser.close();
}
