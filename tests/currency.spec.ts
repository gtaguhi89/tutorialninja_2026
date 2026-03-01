import {test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home')
});
test.skip(({browserName}) => browserName == 'webkit', 'Skipping webkit in Windows');

test.describe('Currency', () =>{
    test('$US Dollar', async({page})=>{

        //Change Current Currency 
       await page.getByRole('button', { name: '$ Currency  ' }).click();
       await page.getByRole('button', { name: '$US Dollar' }).click();

        //Check Product for USD
       await expect(page.locator('.caption .price').nth(0)).toContainText('$602.00');
       await expect(page.locator('.caption .price').nth(0)).toContainText('$500.00');

       await expect(page.locator('.caption .price').nth(1)).toContainText('$123.20');
       await expect(page.locator('.caption .price').nth(1)).toContainText('$101.00');

       await expect(page.locator('.caption .price').nth(2)).toContainText('$110.00');
       await expect(page.locator('.caption .price').nth(2)).toContainText('$90.00');

       await expect(page.locator('.caption .price').nth(3)).toContainText('$98.00');
       await expect(page.locator('.caption .price').nth(3)).toContainText('$80.00');
     
        //check old price before discount
        await expect(page.getByText('$122.00').first()).toBeVisible();
        await expect(page.getByText('$122.00').nth(1)).toBeVisible();

        
});
  

    test('€Euro', async({page})=>{

          //Change Current Currency euro-usd
        await page.getByRole('button', { name: '$ Currency  ' }).click();
        await page.getByRole('button', { name: '€Euro' }).click();

         //Check Product for €Euro
         await expect(page.locator('.caption .price').nth(0)).toContainText('472.33€');
         await expect(page.locator('.caption .price').nth(0)).toContainText('392.30€');
  
         await expect(page.locator('.caption .price').nth(1)).toContainText('96.66€');
         await expect(page.locator('.caption .price').nth(1)).toContainText('79.24€');

         await expect(page.locator('.caption .price').nth(2)).toContainText('86.31€ ');
         await expect(page.locator('.caption .price').nth(2)).toContainText('70.61€');

         await expect(page.locator('.caption .price').nth(3)).toContainText('76.89€');
         await expect(page.locator('.caption .price').nth(3)).toContainText('62.77€');

           //check old price  before discount
          await expect(page.getByText('95.72€').first()).toBeVisible();
          await expect(page.getByText('95.72€').nth(1)).toBeVisible();

        
});

  test('£Pound Sterling', async({page})=>{

         //Change Current Currency euro-£Pound Sterling
        await page.getByRole('button', { name: '$ Currency  ' }).click();
        await page.getByRole('button', { name: '€Euro' }).click();
        await page.getByRole('button', { name: '€ Currency  ' }).click();
        await page.getByRole('button', { name: '£Pound Sterling' }).click()
        
    //Check Product for €Euro
         await expect(page.locator('.caption .price').nth(0)).toContainText('£368.73');
         await expect(page.locator('.caption .price').nth(0)).toContainText('£306.25');
  
         await expect(page.locator('.caption .price').nth(1)).toContainText('£75.46');
         await expect(page.locator('.caption .price').nth(1)).toContainText('£61.86');

         await expect(page.locator('.caption .price').nth(2)).toContainText('£67.38');
         await expect(page.locator('.caption .price').nth(2)).toContainText('£55.13');

         await expect(page.locator('.caption .price').nth(3)).toContainText('£60.03');
         await expect(page.locator('.caption .price').nth(3)).toContainText('£49.00');

         //check old price  before discount
          await expect(page.getByText('£74.73').first()).toBeVisible();
          await expect(page.getByText('£74.73').nth(1)).toBeVisible();


  });


    });



