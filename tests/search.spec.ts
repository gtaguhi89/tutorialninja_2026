import{test,expect} from '@playwright/test';
import { log } from 'node:console';

test.beforeEach(async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home')
});

test.skip(({browserName})=> browserName == 'webkit', 'Skip webit');

test.describe('Search ',()=>{

    const positiveTerms = ['mac', 'iphone'];

    for(let term of positiveTerms){

        test(`Search for ${term}`,async({page})=>{
           
            await page.getByRole('textbox', { name: 'Search' }).fill(term);
            await page.locator('#search').getByRole('button').click();

            const products = await page.locator('.caption h4').allTextContents();
            console.log(products); // ['iMac', 'MacBook', 'MacBook Air', 'MacBook Pro']
        
            for(let elem of products){
                expect(elem.toLowerCase()).toContain(term);
            }
        });
    
    }
    

    const negativeTerms = ['@macccccc', '123', 'kflwowl', '!!!!', 'banana', ''];

    for (let term of negativeTerms){

        test(`Search for ${term}`, async ({ page }) => {
            await page.getByRole('textbox', { name: 'Search' }).fill(term);
            await page.locator('#search').getByRole('button').click();

            await expect(page.getByText('There is no product that')).toBeVisible();
        });
    }


});


