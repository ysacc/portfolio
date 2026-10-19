import fs from 'node:fs/promises';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const nextRequire = createRequire(require.resolve('next/package.json'));
const sharp = nextRequire('sharp');
for (const stage of ['before', 'after']) {
  const directory = `qa-artifacts/${stage}`;
  const results = JSON.parse(await fs.readFile(`${directory}/results.json`, 'utf8'));
  for (const width of [390, 768, 1440, 1920]) for (const theme of ['dark', 'light']) {
    const pages = results.filter(result => result.width === width && result.theme === theme).sort((a, b) => a.route.localeCompare(b.route));
    const thumbnailWidth = 360;
    const thumbnailHeight = Math.round(thumbnailWidth * pages[0].height / width);
    const rowHeight = thumbnailHeight + 42;
    const layers = [];
    for (const [index, page] of pages.entries()) {
      const image = await sharp(`${directory}/${page.screenshot}`).extract({ left: 0, top: 0, width, height: page.height }).resize(thumbnailWidth, thumbnailHeight).toBuffer();
      const left = index % 3 * thumbnailWidth;
      const top = Math.floor(index / 3) * rowHeight;
      const label = Buffer.from(`<svg width="360" height="42"><rect width="360" height="42" fill="#e2e8f0"/><text x="8" y="25" font-family="sans-serif" font-size="12" fill="#0f172a">${page.route}</text></svg>`);
      layers.push({ input: label, left, top }, { input: image, left, top: top + 42 });
    }
    await sharp({ create: { width: 1080, height: rowHeight * 3, channels: 3, background: '#e2e8f0' } }).composite(layers).png().toFile(`${directory}/sheet-${width}-${theme}.png`);
  }
}
console.log('16 hojas de revisión visual creadas (9 páginas por hoja).');
