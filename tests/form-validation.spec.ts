import { getExcelData } from "../utils/excelUtil";
import { test, expect } from "@playwright/test";
import { ENV_CONFIG } from "../config/env";
import { allureUtil } from "../utils/allureUtil";

//importing Pages
import { DemoPage } from "../pages/DemoPage";

const testData = getExcelData('test-data/testdata.xlsx','form');

testData.forEach((data: any, index: number) => {

  test(`validation of Form functionalities ${data.testcase}`, async({browser,page}) =>
  {
    //Initializse the page object
    const demoPage = new DemoPage(page, data);

    console.log("Data :");
    console.log(data);

    await demoPage.navigate_to('https://demoqa.com/automation-practice-form');
    await demoPage.check_practice_form();


  });


});