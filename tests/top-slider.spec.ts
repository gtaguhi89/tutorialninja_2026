import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
});

test.skip( ({browserName})=> browserName === 'webkit', 'Skipping wibkit on Windows');


test.describe('Slider @top-slider', ()=>{
    
    test('Test Next Button', async({page})=>{

        await page.locator('.swiper-button-next').first().click();

        if(await page.getByRole('link', { name: 'iPhone' }).nth(1).isVisible()){
            console.log('---Visible img iPhone---');

            await page.locator('.swiper-button-next').first().click();
            await expect(page.getByRole('img', { name: 'MacBookAir' }).first()).toBeVisible();

        }
        else if(await page.getByRole('link', { name: 'MacBookAir' }).nth(1).isVisible()){
            console.log('---Visible img MacBookAir---');

            await page.locator('.swiper-button-next').first().click();
            await expect(page.getByRole('img', { name: 'iPhone' }).first()).toBeVisible();
        }

      
    });


    test('Test Prev Button', async({page})=>{

        await page.locator('.swiper-button-prev').first().click();


        if(await page.getByRole('link', { name: 'iPhone' }).nth(1).isVisible()){
            await page.locator('.swiper-button-prev').first().click();
            await expect(page.getByRole('img', { name: 'MacBookAir' }).nth(1)).toBeVisible();
        
        }
        else if(await page.getByRole('link', { name: 'MacBookAir' }).nth(1).isVisible()){
           
            await page.locator('.swiper-button-prev').first().click();
            await expect(page.getByRole('img', { name: 'iPhone' }).nth(1)).toBeVisible();

        }
      
    });

    test('Indicators', async({page})=>{
        await page.locator('.swiper-pagination-bullet').first().click();
    
        await expect(page.getByRole('link', { name: 'iPhone' }).first()).toBeVisible();
        
        await page.locator('.swiper-pagination > span:nth-child(2)').first().click();

        await  expect(page.getByRole('img', { name: 'MacBookAir' }).nth(1)).toBeVisible();
    });

});