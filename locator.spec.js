const{test, expect } = require('@playwright/test');

test('Locator',async({page}) =>{
  await   page.goto('https://demoblaze.com/index.html')
  //await page.locator('id=login2').click();
  await page.click('id=login2');
  await page.locator('#loginusername').fill("pavanol")
  await page.locator(' #loginpassword').fill('test@123')
 await page.click("//button[normalize-space()='Log in']")
 await page.waitForSelector('#logout2');

  // Assert logout button is visible (this confirms login was successful)
  await expect(page.locator('#logout2')).toBeVisible();
}
)