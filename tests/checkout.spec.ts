import {test, expect} from 'playwright/test';


// 
test.beforeEach(async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');

    await page.getByRole('button', { name: ' Add to Cart' }).first().click();
    await page.getByRole('button', { name: ' Add to Cart' }).first().click();
    await page.getByRole('button', { name: ' Add to Cart' }).nth(1).click();
    await page.getByRole('button', { name: ' 3 item(s) - $' }).click();
    await page.locator('#cart').getByRole('link', { name: ' Checkout' }).click();
});

test.skip(({browserName})=> browserName === 'webkit', 'Skippinh wibkit in Windows');

test.describe('CheckOut @checkout', ()=>{
 
    
    test('Test for 1 product Quantity', async({page})=>{
        
        //Delete Macbook from cart
        await page.getByRole('button').filter({ hasText: /^$/ }).nth(4).click();

        //==========================================================================
        //================================= 1 -> 2 =================================

        //Update iPhone quantity 1->2
        //*[@id="content"]/form/div/table/tbody/tr[1]/td[4]/div/input
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/input').first().click();
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/input').first().fill('2');
        await page.getByRole('button').nth(4).click();

        //Check After Update Macbook
        await expect(page.getByText('Success: You have modified')).toBeVisible();
        await expect(page.getByRole('cell', { name: '$123.20' })).toBeVisible();
        await expect(page.getByRole('cell', { name: '$246.40' }).nth(1)).toBeVisible();

        //Check Summary
        await expect(page.getByText('Sub-Total:')).toBeVisible();
        await expect(page.getByRole('cell', { name: '$202.00' })).toBeVisible();

        await expect(page.getByText('Eco Tax (-2.00):')).toBeVisible();
        await expect(page.getByRole('cell', { name: '$4.00' })).toBeVisible();

        await expect(page.getByText('VAT (20%):')).toBeVisible();
        await expect(page.getByRole('cell', { name: '$40.40' })).toBeVisible();

        await expect(page.getByRole('cell', { name: 'Total:', exact: true })).toBeVisible();
        await expect(page.locator('//*[@id="content"]/div[2]/div/table/tbody/tr[4]/td[2]')).toContainText('$246.40');  
     

        //==========================================================================
        //================================= 2 -> 3 =================================

        //Update iphone quantity 2->3
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/input').first().click();
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/input').first().fill('3');
        await page.getByRole('button').nth(5).click();

         //Chech after update quantity 2->3
        await expect(page.getByText('Success: You have modified')).toBeVisible();

        await expect(page.getByRole('cell', { name: '$123.20' })).toBeVisible();
        await expect(page.getByRole('cell', { name: '$369.60' }).nth(1)).toBeVisible();

         //Check Summary
        await expect(page.getByText('Sub-Total:')).toBeVisible();
        await expect(page.getByRole('cell', { name: '$303.00' })).toBeVisible();

        await expect(page.getByText('Eco Tax (-2.00):')).toBeVisible();
        await expect(page.getByRole('cell', { name: '$6.00' })).toBeVisible();

        await expect(page.getByText('VAT (20%):')).toBeVisible();
        await expect(page.getByRole('cell', { name: '$60.60' })).toBeVisible();

        await expect(page.getByText('Total:', { exact: true })).toBeVisible();
        await expect(page.locator('//*[@id="content"]/div[2]/div/table/tbody/tr[4]/td[2]')).toContainText('$369.60'); 

        //==========================================================================
        //================================= 3 -> 1 =================================

        //quantity 3 -> 1
        //*[@id="content"]/form/div/table/tbody/tr/td[4]/div/input

         await page.locator('//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/input').first().click();
         await page.locator('//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/input').first().fill('1');
         await page.getByRole('button').nth(5).click();

         await expect(page.getByText('Success: You have modified')).toBeVisible();
         await expect(page.getByRole('cell', { name: '$123.20	' }).first()).toBeVisible();
         await expect(page.getByRole('cell', { name: '$123.20	' }).nth(1)).toBeVisible();

         await expect(page.getByText('Sub-Total:')).toBeVisible();
         await expect(page.getByRole('cell', { name: '$101.00' })).toBeVisible();

         await expect(page.getByText('Eco Tax (-2.00):')).toBeVisible();
         await expect(page.getByRole('cell', { name: '$2.00' })).toBeVisible();

         await expect(page.getByRole('cell', { name: 'VAT (20%):' })).toBeVisible();
         await expect(page.getByRole('cell', { name: '$20.20' })).toBeVisible();

         await expect(page.getByText('Total:', { exact: true })).toBeVisible();
         await expect(page.locator('//*[@id="content"]/div[2]/div/table/tbody/tr[4]/td[2]')).toContainText('$123.20	'); 

        
        //==========================================================================
        //================================= 1 -> 0 ================================= 

        //Update iphone quantity 1->0

        await page.locator('//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/input').click();
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/input').fill('0');
        // await page.getByRole('button').nth(4).click();
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr/td[4]/div/span/button[1]').click();
        
        await expect(page.locator('//*[@id="content"]/p')).toContainText('Your shopping cart is empty!');

        await page.getByRole('link', { name: 'Continue' }).click();

        await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
        await expect(page).toHaveTitle('Your Store');

    });

    
    test("Test for 3 product Quantity", async ({page}) => {

        //============================= 2 MacBook -1 =============================
        //Step 1: Update MacBook Quantity 2 -> -1
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr[2]/td[4]/div/input').click();
        // Step 1: Fill MacBook quantity input
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr[2]/td[4]/div/input').fill("-1");
        // Click the update button to save quantity change
        await page.getByRole("button").filter({ hasText: /^$/ }).nth(3).click();
        // Verify Success Message and Product Totals
        await expect(page.getByText("Success: You have modified")).toBeVisible();
        
        //============================= 1 iPhone  -1 =============================
        
        //Step 1: Update iPhone Quantity 1 -> -1
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr[1]/td[4]/div/input').click();
        // Step 1: Fill iPhone quantity input
        await page.locator('//*[@id="content"]/form/div/table/tbody/tr[1]/td[4]/div/input').fill("-1");
        // Click the update button to save quantity change
        await page.getByRole("button").nth(5).click();
        //Empty cart visibility
        await expect(page.getByRole("heading", { name: "Shopping Cart" }),).toBeVisible();
        await expect(page.locator("#content").getByText("Your shopping cart is empty!"),).toBeVisible();


        await page.getByRole("link", { name: "Continue" }).click();
        await expect(page).toHaveTitle("Your Store");
        await expect(page).toHaveURL("https://tutorialsninja.com/demo/index.php?route=common/home");
    });   
 
    
});




