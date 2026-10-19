import { spawnSync } from 'node:child_process';
import fs from 'node:fs';

const origin = process.env.QA_ORIGIN ?? 'http://localhost:3100';
const routes = process.env.QA_LIGHTHOUSE_ROUTES?.split(',') ?? ['/', '/especialidades', '/proyectos', '/experiencia', '/certificaciones', '/sobre-mi', '/contacto', '/proyectos/principal-ai-assistant', '/proyectos/scientific-research-ai'];
const results = [];
const directory = process.env.QA_LIGHTHOUSE_DIR ?? 'qa-artifacts/lighthouse';
fs.mkdirSync(directory, { recursive: true });
for (const mode of process.env.QA_LIGHTHOUSE_MODES?.split(',') ?? ['mobile', 'desktop']) {
  for (const route of mode === 'mobile' ? routes : ['/']) {
    const name = `${mode}-${route === '/' ? 'inicio' : route.slice(1).replaceAll('/', '--')}`;
    const file = `${directory}/${name}`;
    const result = spawnSync(process.execPath, [
      '.qa-tools/node_modules/lighthouse/cli/index.js', origin + route,
      '--chrome-flags=--headless=new --disable-gpu --no-first-run',
      '--quiet', '--only-categories=performance,accessibility,best-practices,seo',
      '--output=json', '--output=html', `--output-path=${file}`,
      ...(mode === 'desktop' ? ['--preset=desktop'] : []),
    ], { stdio: 'inherit', env: { ...process.env, CHROME_PATH: process.env.CHROME_PATH ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe' } });
    if (result.status !== 0) { results.push({ route, mode, error: result.status }); continue; }
    const report = JSON.parse(fs.readFileSync(`${file}.report.json`, 'utf8'));
    const scores = Object.fromEntries(Object.entries(report.categories).map(([key, category]) => [key, Math.round(category.score * 100)]));
    const metrics = Object.fromEntries(['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index'].map(key => [key, report.audits[key].numericValue]));
    results.push({ route, mode, scores, metrics, warnings: report.runWarnings, browser: report.environment.hostUserAgent });
    console.log(mode, route, JSON.stringify(scores));
    fs.writeFileSync(`${directory}/summary.json`, JSON.stringify(results, null, 2));
  }
}
