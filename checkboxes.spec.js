import { test,expect } from "@playwright/test";

test('checkboxes selection',async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const checkbox = await page.locator("//input[@id='sunday' and @type='checkbox']")
    await checkbox.check()
    await expect(checkbox).toBeChecked()
    await expect(checkbox.isChecked).toBeTruthy()
    const checkboxstatus = await checkbox.isChecked()
    console.log('Sunday is :',checkboxstatus);
    await page.waitForTimeout(5000)
   const checkboxes =[ "//input[@id='sunday' and @type='checkbox']",
                   "//input[@id='tuesday' and @type='checkbox']",
                   "//input[@id='wednesday' and @type='checkbox']"
    ]
    for (const locators of checkboxes)
    {
       await page.locator(locators).check()
    }
    await page.waitForTimeout(3000)
    
     for (const locators of checkboxes)
    {
        if(await page.locator(locators).isChecked())
       await page.locator(locators).uncheck()
    }
        await page.waitForTimeout(3000)
    const monday = await page.locator("//input[@id='monday' and @type='checkbox']")
    await expect(monday).not.toBeChecked()
    await expect(await monday.isChecked()).toBeTruthy
    const mondaystatus = await monday.isChecked()
    console.log('Monday is checked :',mondaystatus )
    await page.waitForTimeout(3000)
    }



)