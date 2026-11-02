# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: form-validation.spec.ts >> validation of Form functionalities TC_03
- Location: tests\form-validation.spec.ts:15:11

# Error details

```
TimeoutError: locator.click: Timeout 60000ms exceeded.
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
    84 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]: Elements
      - generic [ref=e24]: Forms
      - generic [ref=e37]: Alerts, Frame & Windows
      - generic [ref=e49]: Widgets
      - generic [ref=e62]: Interactions
      - generic [ref=e74]: Book Store Application
    - generic [ref=e87]:
      - heading "Practice Form" [level=1] [ref=e88]
      - heading "Student Registration Form" [level=5] [ref=e89]
      - generic [ref=e90]:
        - generic [ref=e91]:
          - generic [ref=e92]: Name
          - textbox "First Name" [ref=e95]
          - textbox "Last Name" [ref=e97]
        - generic [ref=e98]:
          - generic [ref=e99]: Email
          - textbox "name@example.com" [ref=e102]
        - generic [ref=e103]:
          - generic [ref=e104]: Gender
          - generic [ref=e105]:
            - generic [ref=e106]:
              - radio "Male" [ref=e107]
              - generic [ref=e108]: Male
            - generic [ref=e109]:
              - radio "Female" [ref=e110]
              - generic [ref=e111]: Female
            - generic [ref=e112]:
              - radio "Other" [ref=e113]
              - generic [ref=e114]: Other
        - generic [ref=e115]:
          - generic [ref=e116]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=e119]
        - generic [ref=e120]:
          - generic [ref=e121]: Date of Birth
          - textbox [ref=e126]: 02 Nov 2026
        - generic [ref=e127]:
          - generic [ref=e128]: Subjects
          - generic [ref=e131]:
            - log [ref=e133]
            - combobox [ref=e137]
        - generic [ref=e140]:
          - generic [ref=e141]: Hobbies
          - generic [ref=e143]:
            - generic [ref=e144]:
              - checkbox "Sports" [ref=e145]
              - generic [ref=e146]: Sports
            - generic [ref=e147]:
              - checkbox "Reading" [ref=e148]
              - generic [ref=e149]: Reading
            - generic [ref=e150]:
              - checkbox "Music" [ref=e151]
              - generic [ref=e152]: Music
        - generic [ref=e153]:
          - generic [ref=e154]: Picture
          - button "Choose File" [ref=e157] [cursor=pointer]
        - generic [ref=e158]:
          - generic [ref=e159]: Current Address
          - textbox "Current Address" [ref=e162]
        - generic [ref=e163]:
          - generic [ref=e164]: State and City
          - generic [ref=e167]:
            - log [ref=e169]
            - generic [ref=e171]:
              - generic [ref=e172]: Select State
              - combobox [ref=e174]
          - generic [ref=e180]:
            - generic:
              - log
              - generic: Select City
        - button "Submit" [ref=e183] [cursor=pointer]
    - generic [ref=e189]:
      - iframe [ref=e192]:
        - generic [ref=f9e2]:
          - iframe [ref=f9e5]:
            - generic [ref=f15e2] [cursor=pointer]:
              - img [ref=f15e4]:
                - generic "Try for free" [ref=f15e1293]
              - button [ref=f15e1401]
          - generic [ref=f9e6]:
            - generic:
              - generic [ref=f9e7] [cursor=pointer]
              - button [ref=f9e12] [cursor=pointer]
      - iframe [ref=e195]:
        - generic [ref=f4e2]:
          - iframe [ref=f4e5]:
            - generic [ref=f8e2] [cursor=pointer]:
              - img [ref=f8e4]:
                - generic "Try for free" [ref=f8e1293]
              - button [ref=f8e1401]
          - generic [ref=f4e6]:
            - generic:
              - generic [ref=f4e7] [cursor=pointer]
              - button [ref=f4e12] [cursor=pointer]
  - contentinfo [ref=e196]:
    - generic [ref=e197]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import { Locator, Page, Expect } from "@playwright/test";
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
     |                                     ^ TimeoutError: locator.click: Timeout 60000ms exceeded.
  48 |         
  49 |         //allure
  50 |         await allureUtil.step('Creating Step for name entry', async() =>{
  51 |             await this.txt_firstName.fill(this.data.firstName);
  52 |         });
  53 | 
  54 |         await this.txt_lastName.fill(this.data.firstName);
  55 |         //highlighting first name
  56 |         await allureUtil.highlight(this.page,this.txt_lastName);
  57 |         //Taking screenshot
  58 |         await allureUtil.attachScreenshot(this.page,"Screenshot for First and Last Name")
  59 | 
  60 |         
  61 |         
  62 | 
  63 |     }
  64 | }
```