import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { engineeringCases } from '../../src/data/engineering';

test('casos técnicos: navegación, evidencia, accesibilidad y adaptación', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  const engineering = page.locator('#ingenieria');
  await expect(engineering.getByRole('heading', { level: 2 })).toHaveText('Ingeniería en acción');
  await engineering.getByRole('link', { name: /Explorar caso.*Arquitectura frontend/ }).click();

  for (let index = 0; index < engineeringCases.length; index++) {
    const study = engineeringCases[index];
    await expect(page).toHaveURL(`/proyectos/ingenieria/${study.slug}`);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(study.title);
    for (const section of study.sections) {
      await expect(page.getByRole('heading', { name: section.title, exact: true })).toBeVisible();
    }
    await expect(page.getByRole('heading', { name: 'Tecnologías utilizadas', exact: true })).toBeVisible();
    await expect(page.getByRole('complementary', { name: 'Alcance y evidencia del caso' }).getByText('Pendiente de validación:', { exact: false })).toBeVisible();
    await expect(page.locator('figure')).toContainText('Diagrama conceptual ilustrativo');
    await expect(page.locator('figure li')).toHaveCount(4);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', new RegExp(`/proyectos/ingenieria/${study.slug}$`));
    await expect(page.locator('meta[property="og:description"]')).toHaveAttribute('content', study.summary);
    for (const theme of ['light', 'dark']) {
      await page.evaluate(value => document.documentElement.classList.toggle('dark', value === 'dark'), theme);
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
      const audit = await new AxeBuilder({ page }).include('main').analyze();
      expect(audit.violations).toEqual([]);
    }
    if (index < engineeringCases.length - 1) {
      await page.getByRole('navigation', { name: 'Otros casos de ingeniería' }).getByRole('link', { name: engineeringCases[index + 1].title, exact: true }).click();
    }
  }
  await page.getByRole('link', { name: 'Volver a Ingeniería en acción' }).click();
  await expect(page).toHaveURL('/proyectos#ingenieria');
  await expect(page.getByRole('heading', { name: 'Experiencia empresarial', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Proyectos propios', exact: true })).toBeVisible();
  await page.getByRole('textbox', { name: 'Buscar proyectos o tecnologías' }).fill('Rick and Morty');
  await expect(page.getByRole('heading', { name: 'Experiencia empresarial', exact: true })).toHaveCount(0);
  await expect(page.locator('article')).toHaveCount(1);
});
