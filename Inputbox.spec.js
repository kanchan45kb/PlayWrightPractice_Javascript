import { test,expect } from "@playwright/test";
import { log } from "console";
test('inputboxtest',async({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const name = page.locator("#name")
   /* await expect(name).toBeVisible()
    await expect(name).toBeEditable()
    await expect(name).toBeEmpty()*/
   await name.fill('Test12')
    //await expect.soft(name).toBeEmpty() // check soft assertion
// Radio button testing 
  const male = page.locator('#male')
  await male.check();
  await expect(male).toBeChecked()
   await expect(male.isChecked()).toBeTruthy()
   const maleradio = await male.isChecked()
  console.log("Male radio",maleradio)

  const female = page.locator('#female')
  await expect.soft(female).not.toBeChecked()
  await expect(await female.isChecked()).toBeFalsy()
  const femaleradio = await female.isChecked()
console.log("Female radio", femaleradio)


  await page.waitForTimeout(2000)



})
