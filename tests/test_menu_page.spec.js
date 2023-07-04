// @ts-check
import { test, expect } from '@playwright/test';

// Меню магазина "Вкусвилл" по адресу "Менжинского 23 К1"
const VKUSVILL_MENZHIN_URL = "/retail/vkusvill_at_ne_trogat_24523?placeSlug=vkusvill_at_ne_trogat_24523_menzhinskogo_23k1"
const VKUSVILL_MENZHIN_ADDRESS = "Менжинского 21"

// 
test.use({
  geolocation: {
    latitude: 55.867677,
    longitude: 37.668183
  },
  locale: 'ru-RU',
  permissions: ['geolocation'],
  timezoneId: 'Europe/Moscow'
});

test.describe('Retail Menu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(VKUSVILL_MENZHIN_URL); 
});

  // Кнопка поиска 
  test('should have search input', async ({ page }) => {
    if (await page.getByTestId('mobile-top-bar')){
      await page.getByTestId('mobile-top-bar-confirm').click()
    };

    await page.getByTestId('mobile-search-entrance').click();
    await page.getByTestId('search-input').fill('хлеб');
    await expect(page.getByTestId('mobile-shop-search-results')).toBeVisible();
  });

  // Информер
  test('should have informer', async ({ page }) => {
      await page.getByTestId("informer").click();
  });

  // Карусель скидок
  test('should have goods carousel', async ({ page }) => {
    await expect (page.getByTestId("mobile-goods-carousel-header").first()).toHaveText("Скидки и акцииВсе");
  });

  // Боттом-бар
  test.describe('Bottom bar', () => {

    test('should exist', async ({ page }) => {
      await expect (page.getByTestId("bottom-banner-root")).toBeVisible();
    });

    test('should have delivery info', async ({ page }) => {
      await expect (page.getByTestId('bottom-banner-name')).toHaveText('/Доставка/');
    });

    test('should have description', async ({ page }) => {
      await expect (page.getByTestId('bottom-banner-description')).toHaveText('Подробные условия');
    });

    test('should have icon', async ({ page }) => {
      await expect (page.locator('.CartBottomBannerContent_icon')).toBeVisible();
    });

    test('can open full info', async ({ page }) => {
      await page.getByTestId("bottom-banner-root").click();
      await expect (page.getByTestId('ui-bottom-sheet-inner')).toBeVisible();
    });
  })

});

// npx playwright codegen --timezone="Europe/Moscow" --geolocation="55.867677,37.668183" --lang="ru-RU" https://testing.eda.tst.yandex.ru/retail/vkusvill_at_ne_trogat_24523?placeSlug=vkusvill_at_ne_trogat_24523_menzhinskogo_23k1

// для cancel окна с локацией
// if (await page.getByText('Entry your location').isVisible()){
    //   await page.getByTestId('mobile-top-bar-cancel').click()
    //   await page.getByTestId('mobile-location-map-change-button').click()
    //   await page.getByTestId('mobile-address-suggest-input-panel-input').fill(VKUSVILL_MENZHIN_ADDRESS)
    //   await page.getByTestId('address-suggest-item').first().click()
    //   await page.getByTestId('mobile-location-map-submit-button').click()
    // }