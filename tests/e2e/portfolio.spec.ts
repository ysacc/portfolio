import { test as base, expect, type Page } from '@playwright/test';
import { navigation } from '../../src/data/navigation';
import { projectsData } from '../../src/data/projects';

const test = base.extend<{ consoleAudit: void }>({
  consoleAudit: [async ({ page }, use) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => {
      // La navegación 404 se prueba deliberadamente en su propio escenario.
      const expected404 = page.url().endsWith('/proyectos/slug-inexistente') && message.text().includes('404 (Not Found)');
      if (message.type() === 'error' && !expected404) errors.push(message.text());
    });
    await use();
    expect(errors).toEqual([]);
  }, { auto: true }],
});

async function openMenuIfNeeded(page: Page) {
  const menu = page.getByRole('button', { name: 'Abrir menú', exact: true });
  if (await menu.isVisible()) await menu.click();
}

for (const item of navigation) {
  test(`navegación y metadata: ${item.name}`, async ({ page }) => {
    await page.goto('/');
    await openMenuIfNeeded(page);
    const link = page.locator('header').getByRole('link', { name: item.name, exact: true });
    await link.filter({ visible: true }).click();
    await expect(page).toHaveURL(item.href);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    await expect(page.locator('#mobile-navigation')).toBeHidden();
    await openMenuIfNeeded(page);
    await expect(page.locator('header a[aria-current="page"]').filter({ visible: true })).toHaveText(item.name);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(item.href === '/' ? 'ysaccroncal.dev/?$' : item.href + '$'));
    await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.+/);
    await expect(page.locator('meta[property="og:url"]')).toHaveAttribute('content', /ysaccroncal.dev/);
    expect(await page.locator('header a[href*="#"]').count()).toBe(0);
    await page.keyboard.press('Escape');
    await expect(page.locator('#mobile-navigation')).toBeHidden();
  });
}

test('menú, Escape y recuperación del foco', async ({ page }) => {
  test.skip((page.viewportSize()?.width ?? 0) >= 1280);
  await page.goto('/');
  const button = page.getByRole('button', { name: 'Abrir menú', exact: true });
  await button.focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#mobile-navigation')).toBeVisible();
  await page.keyboard.press('Tab');
  await page.keyboard.press('Escape');
  await expect(page.locator('#mobile-navigation')).toBeHidden();
  await expect(button).toBeFocused();
});

test('tema persistente y navegación entre páginas', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Activar tema claro' }).click();
  await expect(page.locator('html')).not.toHaveClass(/dark/);
  await page.reload();
  await expect(page.locator('html')).not.toHaveClass(/dark/);
  await openMenuIfNeeded(page);
  await page.locator('header').getByRole('link', { name: 'Contacto', exact: true }).filter({ visible: true }).click();
  await expect(page).toHaveURL('/contacto');
  await expect(page.locator('html')).not.toHaveClass(/dark/);
  await page.getByRole('button', { name: 'Activar tema oscuro' }).click();
  await expect(page.locator('html')).toHaveClass(/dark/);
});

test('búsqueda, filtros y caso de proyecto', async ({ page }) => {
  await page.goto('/proyectos');
  const search = page.getByRole('textbox', { name: 'Buscar proyectos o tecnologías' });
  await search.fill('principal');
  await expect(page.locator('article')).toHaveCount(1);
  await expect(page.locator('article')).toContainText('Principal');
  await search.fill('zz-no-existe-zz');
  await expect(page.getByText('No se encontraron proyectos con esos criterios.')).toBeVisible();
  await page.getByRole('button', { name: 'Limpiar filtros' }).click();
  await expect(page.locator('article')).toHaveCount(projectsData.length);
  await page.getByRole('button', { name: 'Python', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Python', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('article')).toHaveCount(projectsData.filter(p => p.stack.includes('Python')).length);
  await page.getByRole('button', { name: 'Todos', exact: true }).click();
  await page.getByRole('link', { name: /Leer caso de estudio: Asistente inteligente/ }).first().click();
  await expect(page).toHaveURL('/proyectos/principal-ai-assistant');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Principal');
});

test('paleta de comandos: teclado, foco contenido y navegación', async ({ page }) => {
  await page.goto('/');
  const theme = page.getByRole('button', { name: 'Activar tema claro' });
  await theme.focus();
  await page.keyboard.press('Control+k');
  const dialog = page.getByRole('dialog', { name: 'Paleta de comandos' });
  await expect(dialog).toBeVisible();
  const input = dialog.getByRole('textbox');
  await expect(input).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  expect(await dialog.evaluate(el => el.contains(document.activeElement))).toBe(true);
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
  await expect(theme).toBeFocused();
  await page.keyboard.press('Control+k');
  await input.fill('certificaciones');
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL('/certificaciones');
  await expect(dialog).toBeHidden();
});

test('scroll, historial y enlace de salto', async ({ page }) => {
  await page.goto('/experiencia');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('main')).toBeFocused();
  await page.evaluate(() => window.scrollTo(0, 1300));
  await openMenuIfNeeded(page);
  await page.locator('header').getByRole('link', { name: 'Sobre mí', exact: true }).filter({ visible: true }).click();
  await expect(page).toHaveURL('/sobre-mi');
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(150);
  await page.goBack();
  await expect(page).toHaveURL(/\/experiencia(?:#main-content)?$/);
  await page.goForward();
  await expect(page).toHaveURL('/sobre-mi');
});

test('cabeceras y protección del host sin credenciales predeterminadas', async ({ request }) => {
  const response = await request.get('/');
  expect(response.headers()['x-content-type-options']).toBe('nosniff');
  expect(response.headers()['x-frame-options']).toBe('DENY');
  expect(response.headers()['content-security-policy']).toContain("frame-ancestors 'none'");
  expect(response.headers()['x-powered-by']).toBeUndefined();
  const protectedHost = await request.get('/', { headers: { host: 'colegio.qa.test', 'x-forwarded-host': 'localhost:3100' } });
  expect([401, 503]).toContain(protectedHost.status());
});

test('movimiento reducido y almacenamiento restringido', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.addInitScript(() => Object.defineProperty(window, 'localStorage', { get() { throw new Error('Almacenamiento restringido'); } }));
  await page.goto('/');
  await page.getByRole('button', { name: 'Activar tema claro' }).click();
  await expect(page.locator('html')).not.toHaveClass(/dark/);
  await page.keyboard.press('Control+k');
  const dialog = page.getByRole('dialog', { name: 'Paleta de comandos' });
  await expect(dialog).toBeVisible();
  await expect(dialog).toHaveCSS('transform', 'none');
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});

test('Focus conserva sus rutas y usa datos de muestra', async ({ page, request }) => {
  for (const route of ['/focus', '/focus/calendar', '/focus/pomodoro', '/focus/tasks', '/focus/settings']) {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page.locator('main')).toBeVisible();
    await expect(page.getByRole('status').filter({ hasText: 'Cargando panel...' })).toBeHidden();
    await page.waitForLoadState('networkidle');
  }
  const response = await request.get('/api/calendar/events');
  expect(response.status()).toBe(200);
  const calendar = await response.json();
  expect(['sample', 'google']).toContain(calendar.source);
  expect(Array.isArray(calendar.events)).toBe(true);
});

test('CV, redirecciones, imágenes y 404', async ({ page, request }) => {
  const pdf = await request.get('/resume.pdf');
  expect(pdf.status()).toBe(200);
  expect(pdf.headers()['content-type']).toContain('application/pdf');
  expect((await pdf.body()).subarray(0, 5).toString()).toBe('%PDF-');
  for (const [old, canonical] of [['/projects', '/proyectos'], ['/resume', '/experiencia'], ['/contact', '/contacto'], ...projectsData.map(p => [`/projects/${p.slug}`, `/proyectos/${p.slug}`])]) {
    const response = await request.get(old, { maxRedirects: 0 });
    expect(response.status()).toBe(308);
    expect(new URL(response.headers().location, 'http://localhost:3100').pathname).toBe(canonical);
  }
  for (const project of projectsData) {
    const image = await request.get(project.image, { maxRedirects: 0 });
    expect(image.status()).toBe(200);
    expect(image.headers()['content-type']).toMatch(/^image\//);
  }
  const response = await page.goto('/proyectos/slug-inexistente');
  expect(response?.status()).toBe(404);
  await expect(page.getByText('404 - Página no encontrada')).toBeVisible();
});
