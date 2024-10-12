// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('check navigation bar', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Check if the navigation bar is visible
  await expect(page.getByRole('navigation')).toBeVisible();
});

test('check search functionality', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click on the search button
  await page.getByRole('button', { name: 'Search' }).click();

  // Type 'browser' in the search input
  await page.getByPlaceholder('Search').fill('browser');

  // Expect the search results to be visible
  await expect(page.getByRole('listbox')).toBeVisible();
});

test('check footer links', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Check if the footer links are visible
  const footerLinks = await page.locator('footer a');
  await expect(footerLinks).toHaveCountGreaterThan(0);
});

test('check documentation link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click on the documentation link
  await page.getByRole('link', { name: 'Docs' }).click();

  // Expect the documentation page to be visible
  await expect(page).toHaveURL(/.*docs/);
});
