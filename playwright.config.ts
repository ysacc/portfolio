import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 40_000,
  expect: { timeout: 10_000 },
  workers: 1,
  fullyParallel: false,
  reporter: [['list'], ['html', { open: 'never' }], ['json', { outputFile: 'qa-artifacts/playwright-results.json' }]],
  use: {
    baseURL: 'http://localhost:3100',
    channel: process.env.QA_CHROME_PATH ? undefined : 'chrome',
    launchOptions: process.env.QA_CHROME_PATH ? { executablePath: process.env.QA_CHROME_PATH } : {},
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'mobile', use: { viewport: { width: 390, height: 844 } } },
    { name: 'tablet', use: { viewport: { width: 768, height: 1024 } } },
    { name: 'desktop', use: { viewport: { width: 1440, height: 900 } } },
    { name: 'wide', use: { viewport: { width: 1920, height: 1080 } } },
  ],
  webServer: {
    command: 'node scripts/qa/serve.mjs',
    url: 'http://localhost:3100',
    reuseExistingServer: !process.env.CI,
  },
});
