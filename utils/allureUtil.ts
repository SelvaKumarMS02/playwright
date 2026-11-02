import { Page,test } from "@playwright/test";

export class allureUtil{
    //step wrapper
    static async step(stepName : string, action : () => Promise<void>){
       await test.step(stepName, async()=>{
        await action();
       }); 
    }


// Screenshot Attachment

static async attachScreenshot(page:Page, name: string) {
    const Screenshot = await page.screenshot();

    await test.info().attach(name,{
        body: Screenshot,
        contentType: 'image/png'
    });
}

//highlight element util

static async highlight(page: Page, focusElement: any){
    await focusElement.evaluate((node: HTMLElement) =>{
        (node as HTMLElement).style.border = '3px solid red';
        (node as HTMLElement).style.backgroundColor = 'rgb(68, 255, 0)';
        
    })
}

}
