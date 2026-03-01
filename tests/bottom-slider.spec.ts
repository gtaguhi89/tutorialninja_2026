import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
});

test.skip( ({browserName})=> browserName === 'webkit', 'Skipping wibkit on Windows');


test.describe('Bottom - Slider @bottom-slider', ()=>{

    test('Indicators', async({page})=>{

        // Indicator 1
        await page.locator('.swiper-pagination.carousel0 > span').first().click();
        await expect(page.locator('div:nth-child(6)')).toContainClass('swiper-slide-active');

    
        // Indicator 4
        await page.locator('span:nth-child(4)').click();
        await expect(page.locator('div:nth-child(9)')).toContainClass('swiper-slide-active');

        // Indicator 7
        await page.locator('span:nth-child(7)').click();
        await expect(page.locator('div:nth-child(12)')).toContainClass('swiper-slide-active');

        // Indicator 11
        await page.locator('span:nth-child(11)').click();
        await expect(page.locator('div:nth-child(16)')).toContainClass('swiper-slide-active');

    })


    test('Active Indicator Color', async({page})=>{

    
        // Indicator 1
        await page.locator('.swiper-pagination.carousel0 > span').first().click();
        await expect(page.locator('.swiper-pagination.carousel0 > span').first()).toContainClass('swiper-pagination-bullet-active');

        // Indicator 4
         await page.locator('span:nth-child(4)').click();
         await expect(page.locator('span:nth-child(4)')).toContainClass('swiper-pagination-bullet-active');

        // Indicator 7
        await page.locator('span:nth-child(7)').click();
        await expect(page.locator('span:nth-child(7)')).toContainClass('swiper-pagination-bullet-active');

        // Indicator 11
        await page.locator('span:nth-child(11)').click();
        await expect(page.locator('span:nth-child(11)')).toContainClass('swiper-pagination-bullet-active')
        
    })


});



