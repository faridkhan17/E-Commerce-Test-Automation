// import statements...
import { test, expect } from '@playwright/test';
import { ArticleOverlayPage } from '../pages/articleOverlayPage';
import { testData } from '../data/testData';

test.describe('s.Oliver E-Shop Article Overlay', () => {
  let articleOverlayPage: ArticleOverlayPage;

  test.beforeEach(async ({ page }) => {
    await page.goto(testData.baseUrl);
    const title = await page.title();
    await expect(title).toBe('product_modal');

    articleOverlayPage = new ArticleOverlayPage(page);
  });

  test('Thumbnail click opens overlay', async ({page}) => {
    await articleOverlayPage.openOverlayByThumbnail(testData.thumbnails[0]);
    await expect(articleOverlayPage.isOverlayVisible()).toBeTruthy();
    await articleOverlayPage.closeOverlay();
  });

  test('Overlay displays correct content', async ({page}) => {
    await articleOverlayPage.openOverlayByThumbnail(testData.thumbnails[1]);
    await expect(articleOverlayPage.isOverlayVisible()).toBeTruthy();
    await articleOverlayPage.clickSizeButton('M');
    await expect(articleOverlayPage.isSizeVisible('M')).toBeTruthy();
    await articleOverlayPage.closeOverlay();
  });

  test('Tab section functionality', async () => {
    await articleOverlayPage.openOverlayByThumbnail(testData.thumbnails[0]);
    for (const tab of testData.tabs) {
        const isVisible = await articleOverlayPage.switchTab(tab);
        expect(isVisible).toBeTruthy();
    }
    await articleOverlayPage.closeOverlay();
  });

  test.afterEach(async ({page}) => {
    await page.close();
  });
});
