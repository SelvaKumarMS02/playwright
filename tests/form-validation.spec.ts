import { getExcelData } from "../utils/excelUtil";
import { test, expect } from "@playwright/test";
import { ENV_CONFIG } from "../config/env";


//importing Pages
import { DemoPage } from "../pages/DemoPage";

const testData = getExcelData('test-data/testdata.xlsx','form');

testData.forEach((data: any, index: number) => {

  if(data.flag === 'Y'){

      test(`validation of Form functionalities ${data.testcase}`, { tag: '@smoke' }, async({page}) =>
      {
        //Initializse the page object
        const demoPage = new DemoPage(page, data);

        console.log("Data :");
        console.log(data);

        await demoPage.navigate_to('https://demoqa.com/automation-practice-form');
        await demoPage.check_practice_form();


      });

  }

});