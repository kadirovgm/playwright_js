// @ts-check
import { test, expect } from '@playwright/test';

const MENU_URLS = [
    // Пятерочка на Дорожной 1к1
    'https://eda.yandex.ru/retail/paterocka?placeSlug=pyaterochka_avqtd',
  ];

test.beforeEach(async ({ page }) => {
    await page.goto(MENU_URLS[0]); 
  });

test.describe('Retail Menu', () => {
    test('should have search input', async ({ page }) => {
        await page.getByTestId('search-input').click()
        await page.getByTestId('search-input').fill('хлеб');
        await expect(page.getByTestId('search-results-title')).toHaveText("Нашлось 226 товара");
      });
});

// Можем ли мы гонять тесты на продовых магазинах?
// Можем ли мы на проде настроить 1 магазин, который будет недоступен для пользователей? (проблема: придется лезть в продовые экспы)