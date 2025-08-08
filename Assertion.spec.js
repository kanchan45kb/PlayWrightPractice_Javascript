import{test,expect} from '@playwright/test'

test('test',async({page})=>{
    await page.goto('https://demo.nopcommerce.com/register')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    // await page.locator('#Newsletter').click()
    const checkbox = page.locator('#Newsletter');
    await expect(checkbox).toBeChecked();
    const radiomale = page.locator('#gender-male');
    await radiomale.click()
    await expect(radiomale).toBeChecked()
    const searchbox = page.getByPlaceholder('Search store')
    await expect(searchbox).toBeEnabled()
    const attribute = page.locator('#FirstName')
    await expect(attribute).toHaveAttribute('name', 'FirstName');
    const textbox = page.getByRole('textbox',{ name: 'Company' });
    await textbox.fill('test')
    await expect(textbox).toBeEditable();
    await expect(page.locator("//strong[normalize-space()='Company Details']")).toHaveText('Company Details');
    await expect(page.locator("//strong[normalize-space()='Company Details']")).toContainText('Comp')
    const password = page.locator('#Password')
    await password.fill('test123')
    await expect(password).toHaveValue('test123')
    const digital = page.getByRole('link', { name: 'Digital downloads' });
await digital.click();
}

)