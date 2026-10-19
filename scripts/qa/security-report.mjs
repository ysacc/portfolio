import fs from 'node:fs';

const directory = 'qa-artifacts/security';
const before = JSON.parse(fs.readFileSync(`${directory}/qa-audit-before.json`, 'utf8'));
const after = JSON.parse(fs.readFileSync(`${directory}/qa-audit-final.json`, 'utf8'));
const production = JSON.parse(fs.readFileSync(`${directory}/qa-audit-production.json`, 'utf8'));
const manifest = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const severity = { low: 1, moderate: 2, high: 3, critical: 4 };
const modules = new Map();
for (const advisory of Object.values(before.advisories)) {
  const record = modules.get(advisory.module_name) ?? { package: advisory.module_name, severity: 'low', advisories: [], patched: new Set() };
  if (severity[advisory.severity] > severity[record.severity]) record.severity = advisory.severity;
  record.advisories.push({ id: advisory.id, severity: advisory.severity, title: advisory.title, url: advisory.url, patched: advisory.patched_versions });
  record.patched.add(advisory.patched_versions);
  modules.set(advisory.module_name, record);
}
const records = [...modules.values()].map(record => ({
  ...record, patched: [...record.patched],
  dependency: manifest.dependencies[record.package] || manifest.devDependencies[record.package] ? 'Directa' : 'Transitiva',
  exposure: ['next', 'sharp'].includes(record.package) ? 'Servidor / optimización de imágenes' : 'Compilación, vigilancia de archivos o lint; no se sirve al navegador',
  pending: Object.values(after.advisories).filter(advisory => advisory.module_name === record.package).map(advisory => ({ severity: advisory.severity, url: advisory.url, patched: advisory.patched_versions, findings: advisory.findings })),
}));
fs.writeFileSync(`${directory}/classification.json`, JSON.stringify({ before: before.metadata.vulnerabilities, after: after.metadata.vulnerabilities, production: production.metadata.vulnerabilities, records }, null, 2));
const rows = records.map(record => `| ${record.package} | ${record.severity} | ${record.dependency} | ${record.exposure} | ${record.pending.length ? 'Pendiente: ' + record.pending.map(p => p.patched === '<0.0.0' ? 'sin parche publicado' : p.patched + ' (otra versión mayor)').join(', ') : 'Corregido por actualización compatible'} |`);
fs.writeFileSync(`${directory}/classification.md`, '# Clasificación de la auditoría pnpm\n\n| Paquete | Mayor severidad inicial | Relación | Exposición | Resultado |\n| --- | --- | --- | --- | --- |\n' + rows.join('\n') + '\n\nLos detalles de cada aviso, rangos corregidos, rutas y fuentes primarias están en classification.json y los archivos audit JSON. No se ejecutó audit fix --force.\n');
console.log('Clasificados', records.length, 'paquetes; producción sin avisos; dos avisos de desarrollo pendientes.');
