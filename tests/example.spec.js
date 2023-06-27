import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://eda.yandex.ru/retail/paterocka?placeSlug=pyaterochka_avqtd'); 
  });

test('should have search input', async ({ page }) => {
    await page.getByTestId('search-input').click()
    await page.getByTestId('search-input').fill('хлеб');
    await expect(page.getByTestId('search-results-title')).toHaveText("Нашлось 226 товара");
  });