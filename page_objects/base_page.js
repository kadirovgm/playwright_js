// @ts-check
const { expect } = require('@playwright/test');

export class BasePage{
    constructor(page) {
        this.page = page;
    }
    
    async goto(page_url) {
        await this.page.goto(page_url);
      }
};
