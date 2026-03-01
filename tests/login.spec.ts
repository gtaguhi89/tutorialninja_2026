import { test, expect } from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
});

test.skip( ({browserName})=> browserName === 'webkit', 'Skipping wibkit on Windows');

test.describe('LOGIN @login', ()=>{

    test('Login with valid email and valid password',async({page})=>{

        // ------ Navigate to Login page ------

    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole('link', { name: 'Login' }).click();

       // ------ Fill in valid credentials ------

    await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('hasmik.levonyan07@gmail.com');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('bGmDBYJU@EgA8b');

       // ------ Submit login ------
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
    await expect(page).toHaveTitle('My Account');

      // Logout after successful login

    await page.getByRole('link', { name: ' My Account' }).click();
    await page.locator('#top-links').getByRole('link', { name: 'Logout' }).click();

      // ------ Verify successful login landing page ------

    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/logout');
    await expect(page).toHaveTitle('Account Logout');


    });

    test('User remains logged in after refreshing the page',async({page})=>{

        // ------ Navigate to Login page ------

    await page.getByRole('link', { name: ' My Account' }).click();
    await page.getByRole('link', { name: 'Login' }).click();

        // ------ Fill in valid credentials ------ 

    await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
    await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('hasmik.levonyan07@gmail.com');

    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('bGmDBYJU@EgA8b');

         // ------ Submit login ------

    await page.getByRole('button', { name: 'Login' }).click();

        // ------ Reload the page (session persistence check) ------

    await page.reload();

        // ------ Verify user is still on My Account page ------

    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
    await expect(page).toHaveTitle('My Account');
    

    });

    test('Valid email and invalid password',async ({page})=>{

        // ------ Navigate to Login page ------

        await page.getByRole('link', { name: ' My Account' }).click();
        await page.getByRole('link', { name: 'Login' }).click();

        // ------ Enter valid email + invalid password ------

        await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
        await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('hasmik.levonyan07@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('ynwydbdftba');

        // ------ Submit login ------

        await page.getByRole('button', { name: 'Login' }).click();

        // ------ Verify warning message is shown ------

        await expect(page.getByText('Warning: No match for E-Mail')).toBeVisible();
    });

    test('Invalid email and valid password', async({page})=>{

         // ------ Navigate to Login page ------

        await page.getByRole('link', { name: ' My Account' }).click();
        await page.getByRole('link', { name: 'Login' }).click();

        // ------ Enter invalid email + valid password ------

        await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
        await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('hasmik.hasmik@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('bGmDBYJU@EgA8b');

        // ------ Submit login ------

        await page.getByRole('button', { name: 'Login' }).click();

        // ------ Verify warning alert is shown ------

        await expect(page.locator('.alert')).toContainText('Warning:');


    });

    test('Invalid email and invalid password', async({page})=>{

         // ------ Navigate to Login page ------

        await page.getByRole('link', { name: ' My Account' }).click();
        await page.getByRole('link', { name: 'Login' }).click();

         // ------ Enter invalid email + invalid password ------

        await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
        await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('hasmik.hasmik@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('bGmDBYJU@EgA8bbbbb');

        // ------ Submit login ------
        
        await page.getByRole('button', { name: 'Login' }).click();

        // ------ Verify warning alert is shown ------

        await expect(page.locator('.alert')).toContainText('Warning:');


    });

    test('Empty email and empty password', async({page})=>{

        // ------ Navigate to Login page ------

        await page.getByRole('link', { name: ' My Account' }).click();
        await page.getByRole('link', { name: 'Login' }).click();

         // ------ Attempt login with empty credentials ------

        await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('button', { name: 'Login' }).click();

        // ------ Verify warning message is shown ------

        await expect(page.getByText('Warning: No match for E-Mail')).toBeVisible();
    });

    test('Empty email and filled password',async ({page})=>{

        // ------ Navigate to Login page ------

        await page.getByRole('link', { name: ' My Account' }).click();
        await page.getByRole('link', { name: 'Login' }).click();

        // ------ Enter password only (email left empty) ------

        await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('bGmDBYJU@EgA8b');

        // ------ Submit login ------
         
        await page.getByRole('button', { name: 'Login' }).click();

        // ------ Verify warning message is shown ------

        await expect(page.getByText('Warning: No match for E-Mail')).toBeVisible();
    });

    test('Filled email and empty password',async ({page})=>{

        // ------ Navigate to Login page ------

        await page.getByRole('link', { name: ' My Account' }).click();
        await page.getByRole('link', { name: 'Login' }).click();

        // ------ Enter email only (password left empty) ------

        await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('hasmik.levonyan07@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).click();

        // ------ Submit login ------
         
        await page.getByRole('button', { name: 'Login' }).click();

        // ------ Verify warning message is shown ------

        await expect(page.getByText('Warning: No match for E-Mail')).toBeVisible();

        
    });

    test('Invalid email format',async ({page})=>{

         // ------ Navigate to Login page ------

        await page.getByRole('link', { name: ' My Account' }).click();
        await page.getByRole('link', { name: 'Login' }).click();

        // ------ Enter malformed email + valid password ------

        await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
        await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('hasmik.hasmik@gmail,com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('bGmDBYJU@EgA8b');

        // ------ Submit login ------

        await page.getByRole('button', { name: 'Login' }).click();

        // ------ Verify warning alert is shown ------

        await expect(page.locator('.alert')).toContainText('Warning:');


    });

    test('Email with leading and trailing spaces', async({page})=>{

        // ------ Navigate to Login page ------

        await page.getByRole('link', { name: ' My Account' }).click();
        await page.getByRole('link', { name: 'Login' }).click();

        // ------ Enter email containing whitespace + valid password ------

        await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
        await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('hasmik.levonyan 07@gmail.com');
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill('bGmDBYJU@EgA8b');

         // ------ Submit login ------

        await page.getByRole('button', { name: 'Login' }).click();

        // ------ Verify warning alert is shown ------

        await expect(page.locator('.alert')).toContainText('Warning:');


    });


});