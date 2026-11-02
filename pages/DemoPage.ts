import { Locator, Page, expect } from "@playwright/test";
import { BasePage } from "./BasePage"
import { allureUtil } from "../utils/allureUtil";
import { ENV_CONFIG } from "../config/env";

/*
Class Name : DemoPage
Functionality : Page class to store and perform actions on Search Page.
Date : 02-Nov-2026
Author : Selva Kumar [selva_s@outlook.com]
*/ 

export class DemoPage extends BasePage {
    //Webelement variable declaration
    readonly btn_form;
    readonly lnk_practiceForm;
    readonly txt_firstName;
    readonly txt_lastName;
    readonly txt_email;
    readonly txt_mobileNumber;
    readonly data : any;
    

    //Consructor
    constructor(page: Page, excelData: any){
        super(page);

        this.btn_form = page.getByText('Forms').nth(0);
        this.lnk_practiceForm = page.getByRole('link', { name: 'Practice Form' }).nth(0);
        this.txt_firstName  = page.getByRole('textbox', { name: 'First Name' });
        this.txt_lastName   = page.getByRole('textbox', { name: 'Last Name' });
        this.txt_email      = page. getByRole('textbox', { name: 'name@example.com' });
        this.txt_mobileNumber = page.getByRole('textbox', { name: 'Mobile Number' });
        this.data = excelData;
    
    }

    //Navigating to URL
    async navigate_to(strURL: any){
        //Launch URL
        await this.page.goto('https://demoqa.com/automation-practice-form');
    }

    //validating form functionalities
    async check_practice_form(){
        await this.btn_form.click();
        await this.lnk_practiceForm.click();
        
        //allure
        await allureUtil.step('Creating Step for name entry', async() =>{
            await this.txt_firstName.fill(this.data.firstName);
        });

        await this.txt_lastName.fill(this.data.lastName);
        //highlighting first name
        await allureUtil.highlight(this.page,this.txt_lastName);
        //Taking screenshot
        await allureUtil.attachScreenshot(this.page,"Screenshot for First and Last Name");
        //Assertion
        await expect(this.txt_lastName).toHaveValue(this.data.lastName);
        
        

    }
}