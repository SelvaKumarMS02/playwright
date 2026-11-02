# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: form-validation.spec.ts >> validation of Form functionalities TC_02
- Location: tests\form-validation.spec.ts:15:11

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Practice Form' }).first()
    - locator resolved to <a class="router-link" data-discover="true" href="/automation-practice-form">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    12 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Test source

```ts
  1  | import { Locator, Page, expect } from "@playwright/test";
  2  | import { BasePage } from "./BasePage"
  3  | import { allureUtil } from "../utils/allureUtil";
  4  | import { ENV_CONFIG } from "../config/env";
  5  | 
  6  | /*
  7  | Class Name : DemoPage
  8  | Functionality : Page class to store and perform actions on Search Page.
  9  | Date : 02-Nov-2026
  10 | Author : Selva Kumar [selva_s@outlook.com]
  11 | */ 
  12 | 
  13 | export class DemoPage extends BasePage {
  14 |     //Webelement variable declaration
  15 |     readonly btn_form;
  16 |     readonly lnk_practiceForm;
  17 |     readonly txt_firstName;
  18 |     readonly txt_lastName;
  19 |     readonly txt_email;
  20 |     readonly txt_mobileNumber;
  21 |     readonly data : any;
  22 |     
  23 | 
  24 |     //Consructor
  25 |     constructor(page: Page, excelData: any){
  26 |         super(page);
  27 | 
  28 |         this.btn_form = page.getByText('Forms').nth(0);
  29 |         this.lnk_practiceForm = page.getByRole('link', { name: 'Practice Form' }).nth(0);
  30 |         this.txt_firstName  = page.getByRole('textbox', { name: 'First Name' });
  31 |         this.txt_lastName   = page.getByRole('textbox', { name: 'Last Name' });
  32 |         this.txt_email      = page. getByRole('textbox', { name: 'name@example.com' });
  33 |         this.txt_mobileNumber = page.getByRole('textbox', { name: 'Mobile Number' });
  34 |         this.data = excelData;
  35 |     
  36 |     }
  37 | 
  38 |     //Navigating to URL
  39 |     async navigate_to(strURL: any){
  40 |         //Launch URL
  41 |         await this.page.goto('https://demoqa.com/automation-practice-form');
  42 |     }
  43 | 
  44 |     //validating form functionalities
  45 |     async check_practice_form(){
  46 |         await this.btn_form.click();
> 47 |         await this.lnk_practiceForm.click();
     |                                     ^ Error: locator.click: Target page, context or browser has been closed
  48 |         
  49 |         //allure
  50 |         await allureUtil.step('Creating Step for name entry', async() =>{
  51 |             await this.txt_firstName.fill(this.data.firstName);
  52 |         });
  53 | 
  54 |         await this.txt_lastName.fill(this.data.lastName);
  55 |         //highlighting first name
  56 |         await allureUtil.highlight(this.page,this.txt_lastName);
  57 |         //Taking screenshot
  58 |         await allureUtil.attachScreenshot(this.page,"Screenshot for First and Last Name");
  59 |         //Assertion
  60 |         await expect(this.txt_lastName).toHaveValue(this.data.lastName);
  61 |         
  62 |         
  63 | 
  64 |     }
  65 | }
```