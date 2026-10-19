import fs from 'node:fs';

const rows = JSON.parse(fs.readFileSync('qa-artifacts/lighthouse-final/summary.json', 'utf8'));
const body = rows.filter(row => row.scores).map(row => `| ${row.mode} | ${row.route} | ${row.scores.performance} | ${row.scores.accessibility} | ${row.scores['best-practices']} | ${row.scores.seo} | ${(row.metrics['largest-contentful-paint'] / 1000).toFixed(2)} s | ${Math.round(row.metrics['total-blocking-time'])} ms | ${row.metrics['cumulative-layout-shift'].toFixed(3)} |`).join('\n');
const below = rows.filter(row => row.mode === 'mobile' && row.scores?.performance < 90).length;
const table = `\n### Resultados finales de Lighthouse\n\n| Modo | Página | Rendimiento | Accesibilidad | Best Practices | SEO | LCP | TBT | CLS |\n| --- | --- | --- | --- | --- | --- | --- | --- | --- |\n${body}\n\n${below} de las nueve mediciones móviles quedaron por debajo del objetivo orientativo de rendimiento 90. Se conservan los resultados reales, sin redondearlos hacia el objetivo. Lighthouse advierte que la CPU de este entorno es más lenta de lo esperado para su modelo de throttling. Son mediciones locales y no sustituyen una prueba sobre el hosting de destino.\n`;
const file = 'QA-REPORT.md';
fs.writeFileSync(file, fs.readFileSync(file, 'utf8').replace(/<!-- LIGHTHOUSE_RESULTS_START -->[\s\S]*?<!-- LIGHTHOUSE_RESULTS_END -->/, `<!-- LIGHTHOUSE_RESULTS_START -->\n${table}\n<!-- LIGHTHOUSE_RESULTS_END -->`));
console.log(table);
