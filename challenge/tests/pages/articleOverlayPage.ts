// articleOverlayPage.ts

import { Page } from '@playwright/test';

export class ArticleOverlayPage {
  constructor(private page: Page) {}

  async openOverlayByThumbnail(thumbnailName: string) {
    await this.page.getByRole('img', { name: thumbnailName }).click();
  }

  async closeOverlay() {
    await this.page.getByRole('button', { name: '×' }).click();
  }

  async isOverlayVisible() {
    return await this.page.locator('[data-test="modal-content-test"]').first().isVisible();
  }

  async clickSizeButton(size: string) {
    await this.page.getByRole('button', { name: size, exact: true }).click();
  }

  async isSizeVisible(size: string) {
    return await this.page.locator('span').filter({ hasText: size }).first().isVisible();
  }


  async switchTab(tabName: string) {
    const formattedTab = tabName.toLowerCase().replace(/&/g, '').replace(/\s+/g, '-').split('-').slice(0, 2).join('-') + '-tab';
    await this.page.click(`text=${tabName}`);
    return await this.page.locator(`.${formattedTab}`).isVisible();
  }
}
