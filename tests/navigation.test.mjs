import test from 'node:test';
import assert from 'node:assert/strict';
import { navigation, isNavigationActive } from '../src/data/navigation.ts';
import nextConfig from '../next.config.js';

test('primary navigation uses the seven canonical pages without fragments', () => {
  assert.deepEqual(navigation.map(item => item.href), ['/', '/especialidades', '/proyectos', '/experiencia', '/certificaciones', '/sobre-mi', '/contacto']);
  assert(navigation.every(item => item.href.startsWith('/') && !item.href.includes('#')));
});

test('active navigation includes project cases without matching unrelated prefixes', () => {
  assert.equal(isNavigationActive('/proyectos/principal-ai-assistant', '/proyectos'), true);
  assert.equal(isNavigationActive('/proyectos', '/'), false);
  assert.equal(isNavigationActive('/proyectos-adicionales', '/proyectos'), false);
  assert.equal(isNavigationActive('/experiencia', '/experiencia'), true);
});

test('legacy indexed routes redirect permanently in one step', async () => {
  const redirects = await nextConfig.redirects();
  for (const [source, destination] of [['/projects', '/proyectos'], ['/projects/:slug([a-z0-9-]+)', '/proyectos/:slug'], ['/resume', '/experiencia'], ['/contact', '/contacto']]) {
    const redirect = redirects.find(item => item.source === source);
    assert(redirect, source);
    assert.equal(redirect.destination, destination);
    assert.equal(redirect.permanent, true);
    assert(!redirects.some(item => item.source === redirect.destination), 'redirect chain');
  }
});
