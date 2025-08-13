import { test,expect } from "@playwright/test";
import { writeHeapSnapshot } from "v8";
test('dropdown selection',async({page}) =>{

  await page.goto('https://testautomationpractice.blogspot.com/')
await page.evaluate (()=>{ window.scrollBy(0,500)}) // sentax to scroll page 
 const valu01 = await page.locator('#country').selectOption({label:'India'})
  console.log('First value selected as:',valu01)
 await page.waitForTimeout(1000)
  const value2 = await page.locator('#country').selectOption('Japan')
  console.log('Second value selected as:', value2)
  await page.locator('#country').selectOption({value:'uk'})
  await page.locator('#country').selectOption({index:4})
//  const numberOption = await page.locator('#country option')
  const number = await numberOption.count()
  console.log('Number of country options are :',number)
  const options = await page.$$('#country option')
  console.log('Number of countries:' , options.length)
  await expect(options.length).toBe(10)
// await expect(numberOption).toHaveCount(10)
   await page.waitForTimeout(3000)
   let status = false
for (const option of options){
  console.log(await option.textContent())
}
for(const singleoption of options) {
  let value = await singleoption.textContent();
  if (value.includes('Canada'))
    {
    status = true;
    console.log(status)
    break;
  }
  }

}
)