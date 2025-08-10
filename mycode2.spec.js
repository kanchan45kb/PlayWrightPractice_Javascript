import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.nopcommerce.com/en/register');
  
  await page.getByRole('textbox', { name: 'First name:' }).fill('Test');
  
  await page.getByRole('textbox', { name: 'Last name:' }).fill('demo');
  
  await page.getByRole('textbox', { name: 'Email:', exact: true }).fill('kb.test1@yopmail.com');
  await page.getByRole('textbox', { name: 'Confirm email:' }).click()
  const message =await page.locator("//span[@class='field-validation-error']") 
  await expect(message).toContainText('We do not accept email')
 
  await page.getByRole('textbox', { name: 'Confirm email:' }).fill('kb.test1@yopmail.com');
 
  await page .getByRole('textbox', { name: 'Username:' }).fill('kb');
  await page.getByRole('button', { name: 'Check Availability' }).click();
  await page.getByLabel('Country:').selectOption('334');
  
  await page.locator('#ConfirmEmail-error').click();

  await page.getByText('I would like to receive').click();
  
  await page.getByRole('textbox', { name: 'Password:', exact: true }).fill('test@123');

  await page.getByRole('textbox', { name: 'Confirm password:' }).fill('test@123');
  await page.getByLabel('My company primarily:').selectOption('5');
  await page.getByRole('button', { name: 'Register' }).click();
 

  await page.getByRole('textbox', { name: 'Email:', exact: true }).fill('kanchan.bhosale@gmail.com');
  
  
  await page.getByRole('textbox', { name: 'Confirm email:' }).fill('kanchan.bhosale@gmail.com');
 
  await page.getByRole('button', { name: 'Register' }).click();
  
});