import {test,expect} from '@playwright/test'
test('soft',async({page}) => {

    await page.goto('https://demoblaze.com/index.html')
    await expect.soft(page).toHaveTitle('STORE123')
    await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()
    










})