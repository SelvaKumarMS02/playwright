# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: form-validation.spec.ts >> validation of Form functionalities TC_01
- Location: tests\form-validation.spec.ts:13:7

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('Forms') resolved to 2 elements:
    1) <div class="header-text">…</div> aka getByText('Forms', { exact: true })
    2) <div class="practice-form-wrapper">…</div> aka getByText('Practice FormStudent')

Call log:
  - waiting for getByText('Forms')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link:
      - /url: https://demoqa.com
  - generic [ref=e6]:
    - generic [ref=e9]:
      - generic [ref=e10]: Elements
      - generic [ref=e22]:
        - generic [ref=e23] [cursor=pointer]: Forms
        - list [ref=e36]:
          - listitem [ref=e37] [cursor=pointer]:
            - link "Practice Form" [ref=e38]:
              - /url: /automation-practice-form
      - generic [ref=e41]: Alerts, Frame & Windows
      - generic [ref=e53]: Widgets
      - generic [ref=e66]: Interactions
      - generic [ref=e78]: Book Store Application
    - generic [ref=e91]:
      - heading "Practice Form" [level=1] [ref=e92]
      - heading "Student Registration Form" [level=5] [ref=e93]
      - generic [ref=e94]:
        - generic [ref=e95]:
          - generic [ref=e96]: Name
          - textbox "First Name" [ref=e99]
          - textbox "Last Name" [ref=e101]
        - generic [ref=e102]:
          - generic [ref=e103]: Email
          - textbox "name@example.com" [ref=e106]
        - generic [ref=e107]:
          - generic [ref=e108]: Gender
          - generic [ref=e109]:
            - generic [ref=e110]:
              - radio "Male" [ref=e111]
              - generic [ref=e112]: Male
            - generic [ref=e113]:
              - radio "Female" [ref=e114]
              - generic [ref=e115]: Female
            - generic [ref=e116]:
              - radio "Other" [ref=e117]
              - generic [ref=e118]: Other
        - generic [ref=e119]:
          - generic [ref=e120]: Mobile(10 Digits)
          - textbox "Mobile Number" [ref=e123]
        - generic [ref=e124]:
          - generic [ref=e125]: Date of Birth
          - textbox [ref=e130]: 02 Nov 2026
        - generic [ref=e131]:
          - generic [ref=e132]: Subjects
          - generic [ref=e135]:
            - log [ref=e137]
            - combobox [ref=e141]
        - generic [ref=e144]:
          - generic [ref=e145]: Hobbies
          - generic [ref=e147]:
            - generic [ref=e148]:
              - checkbox "Sports" [ref=e149]
              - generic [ref=e150]: Sports
            - generic [ref=e151]:
              - checkbox "Reading" [ref=e152]
              - generic [ref=e153]: Reading
            - generic [ref=e154]:
              - checkbox "Music" [ref=e155]
              - generic [ref=e156]: Music
        - generic [ref=e157]:
          - generic [ref=e158]: Picture
          - button "Choose File" [ref=e161] [cursor=pointer]
        - generic [ref=e162]:
          - generic [ref=e163]: Current Address
          - textbox "Current Address" [ref=e166]
        - generic [ref=e167]:
          - generic [ref=e168]: State and City
          - generic [ref=e171]:
            - log [ref=e173]
            - generic [ref=e175]:
              - generic [ref=e176]: Select State
              - combobox [ref=e178]
          - generic [ref=e184]:
            - generic:
              - log
              - generic: Select City
        - button "Submit" [ref=e187] [cursor=pointer]
  - contentinfo [ref=e194]:
    - generic [ref=e195]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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
  21 |     readonly excelData : any;
  22 |     
  23 | 
  24 |     //Consructor
  25 |     constructor(page: Page, excelData: any){
  26 |         super(page);
  27 | 
  28 |         this.btn_form = page.getByText('Forms');
  29 |         this.lnk_practiceForm = page.getByRole('link', { name: 'Practice Form' }).nth(0);
  30 |         this.txt_firstName  = page.getByRole('textbox', { name: 'First Name' });
  31 |         this.txt_lastName   = page.getByRole('textbox', { name: 'Last Name' });
  32 |         this.txt_email      = page. getByRole('textbox', { name: 'name@example.com' });
  33 |         this.txt_mobileNumber = page.getByRole('textbox', { name: 'Mobile Number' });
  34 | 
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
> 46 |         await this.btn_form.click();
     |                             ^ Error: locator.click: Error: strict mode violation: getByText('Forms') resolved to 2 elements:
  47 |         await this.lnk_practiceForm.click();
  48 | 
  49 |         //allure
  50 |         await allureUtil.step('taking screenshot of data entry', async() =>{
  51 |             await this.txt_firstName.fill(this.excelData.firstName);
  52 |         });
  53 |         
  54 | 
  55 |     }
  56 | }
```