import { Page, Locator } from '@playwright/test';
/*
    * BasePage class serves as a foundational class for all page objects in the application.
    Class Name: BasePage
    Description: This class provides common functionalities and properties that can be inherited by other page classes. It encapsulates the Playwright Page object and provides utility methods for interacting with web elements.     
    Date: 2024-06-20
    Author: Selva Kumar M S
*/  

export class BasePage {
    readonly  page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async click(locator: string){
        await this.page.locator(locator).click();
    }

    async fill(locator: string, value: string){
        await this.page.locator(locator).fill(value);
    }

    async getText(locator: string): Promise<string> {
        return await this.page.locator(locator).textContent() || '';
    }

    async isVisible(locator: string): Promise<boolean> {
        return await this.page.locator(locator).isVisible();
    }

    async waitForVisibility(locator: string, timeout: number = 5000): Promise<void> {
        await this.page.locator(locator).waitFor({ state: 'visible', timeout });
    }
}