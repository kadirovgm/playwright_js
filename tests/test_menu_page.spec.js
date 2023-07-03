// @ts-check
import { test, expect } from '@playwright/test';

// Меню магазина "Вкусвилл" по адресу "Менжинского 23 К1"
const VKUSVILL_MENZHIN_URL = "https://testing.eda.tst.yandex.ru/retail/vkusvill_at_ne_trogat_24523?placeSlug=vkusvill_at_ne_trogat_24523_menzhinskogo_23k1"
const VKUSVILL_MENZHIN_ADDRESS = "Менжинского 21"

test.describe('Retail Menu', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto(VKUSVILL_MENZHIN_URL); 

    // if (await page.getByText('Entry your location').isVisible()){
    //   await page.getByTestId('mobile-top-bar-cancel').click()
    //   await page.getByTestId('mobile-location-map-change-button').click()
    //   await page.getByTestId('mobile-address-suggest-input-panel-input').fill('Менжинского 21')
    //   await page.getByTestId('address-suggest-item').first().click()
    //   await page.getByTestId('mobile-location-map-submit-button').click()
    // }
});

  // Кнопка поиска 
  test('should have search input', async ({ page }) => {
      
    if (await page.getByText('Entry your location').isVisible()){
      await page.getByTestId('mobile-top-bar-cancel').click()
    };
    await page.getByTestId('mobile-search-entrance').click();
    await page.getByTestId('search-input').fill('хлеб');
    await expect(page.getByRole('heading', {name: 'Items'})).toHaveText('Items');
  });

  // Информер
  test('should have informer', async ({ page }) => {
      await page.getByTestId("informer").click();
  });

  // Карусель скидок
  test('should have goods carousel', async ({ page }) => {
    await expect (page.getByTestId("mobile-goods-carousel-header").first()).toHaveText("Discounts and promosAll");
  });

});
