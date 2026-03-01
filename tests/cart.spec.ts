import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
});

test.skip( ({browserName})=> browserName === 'webkit', 'Skipping wibkit on Windows');


test.describe('CART', ()=>{


    test('Test Add and Remove from cart', async({page})=>{
        
        // ========== ADD PRODUCT SECTION ==========
        // 1 Click
        await page.getByRole('button', { name: ' Add to Cart' }).first().click();

        await expect(page.getByText('Success: You have added')).toContainText('MacBook');
        await expect(page.getByRole('button', { name: ' 1 item(s) - $' })).toBeVisible();

        // 2 Click
        await page.getByRole('button', { name: ' Add to Cart' }).first().click();
        
        await expect(page.getByText('Success: You have added')).toContainText('MacBook');
        await expect(page.getByRole('button', { name: ' 2 item(s) - $' })).toBeVisible();

        // 3 Click
        await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();

        await expect(page.getByText('Success: You have added')).toContainText('iPhone');
        await expect(page.getByRole('button', { name: ' 3 item(s) - $' })).toBeVisible();


        // ========== REMOVE PRODUCT SECTION ==========

        // Remove 1
        await page.getByRole('button', { name: ' 3 item(s) - $' }).click();
        await page.getByRole('row', { name: 'MacBook MacBook x2 $1,204.00 ' }).getByRole('button').click();

        await expect(page.getByRole('button', { name: ' 1 item(s) - $' })).toBeVisible();

        // Remove 2
        await page.getByRole('button', { name: ' 1 item(s) - $' }).click();
        await page.getByTitle('Remove').first().click();

        await expect(page.getByRole('button', { name: ' 0 item(s) - $' })).toBeVisible();


        // ========== CART IS EPMPTY SECTION ==========
        await page.getByRole('button', { name: ' 0 item(s) - $' }).click();
        await expect(page.getByText('Your shopping cart is empty!')).toBeVisible();

    });
        
    test('Cart Visisbility', async({page})=>{


        await page.getByRole('button', { name: ' Add to Cart' }).first().click();
        await page.getByRole('button', { name: ' Add to Cart' }).first().click();
        await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
        await page.getByRole('button', { name: ' 3 item(s) - $' }).click();

        //checking Iphone 

        await expect(page.locator('#cart').getByText('iPhone')).toBeVisible();
        await expect(page.getByRole('cell', { name: 'x1' })).toBeVisible();
        await expect(page.getByRole('cell', { name: '$123.20' })).toBeVisible();
       

       //checking Macbook
        await expect(page.getByText('MacBook').first()).toBeVisible();
        await expect(page.getByRole('cell', { name: 'x2' })).toBeVisible();
        await expect(page.getByRole('cell', { name: '$1,204.00' })).toBeVisible();

        //Checking price 

        await expect(page.getByText('Sub-Total')).toBeVisible();
        await expect(page.getByRole('cell', { name: '$1,101.00' })).toBeVisible();

        await expect(page.getByText('Eco Tax (-2.00)')).toBeVisible();
        await expect(page.getByRole('cell', { name: '$6.00' })).toBeVisible();
  
        await expect(page.getByText('VAT (20%)')).toBeVisible();
        await expect(page.getByRole('cell', { name: '$220.20' })).toBeVisible();

        await expect(page.getByRole('cell', { name: 'Total', exact: true })).toBeVisible();
        await expect(page.getByRole('cell', { name: '$1,327.20' })).toBeVisible();

        await expect(page.getByRole('link', { name: ' View Cart' })).toBeVisible();
  
        await expect(page.locator('#cart').getByRole('link', { name: ' Checkout' })).toBeVisible();
 

    });

});


