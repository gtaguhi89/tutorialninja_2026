import{test,expect} from '@playwright/test';

test.beforeEach(async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home');
});

test.skip(({browserName})=> browserName == 'webkit', 'Skip webit');

test.describe('Desktop Test',()=>{

  test('Test PC',async({page})=>{
    await page.getByRole('link', { name: 'Desktops', exact: true }).hover();
    await page.getByRole('link', { name: 'PC (0)' }).click();
    await expect(page.getByRole('heading', { name: 'PC' })).toBeVisible;
    await expect(page.getByText('There are no products to list')).toBeVisible();
    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=20_26');
    await expect(page).toHaveTitle('PC');
    await page.getByRole('link', { name: 'Continue' }).click();
    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
    await expect(page).toHaveTitle('Your Store');
  });

  test( 'Mac Test', async({page})=>{
      
      await page.getByRole('link', { name: 'Desktops', exact: true }).hover();
      await page.getByRole('link', { name: 'Mac (1)' }).click();
      await expect(page.getByRole('heading', { name: 'Mac', exact: true })).toBeVisible();
      await expect(page).toHaveTitle('Mac');
      await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=20_27');
      await expect(page.getByText('Showing 1 to 1 of 1 (1 Pages)')).toBeVisible();

  });

  test('ShowAllDesktops Test',async({page})=>{
    
      await page.getByRole('link', { name: 'Desktops', exact: true }).hover();
      await page.getByRole('link', { name: 'Show AllDesktops' }).click();
      await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=20');
      await expect(page).toHaveTitle('Desktops');
      await expect(page.getByRole('heading', { name: 'Desktops' })).toBeVisible();
      await expect(page.getByText('Showing 1 to 12 of 12 (1')).toBeVisible();

  });
});

test.describe('Laptops & Notebooks',()=>{
    
    test('Macs Test',async({page})=>{
      await page.getByRole('link', { name: 'Laptops & Notebooks', exact: true }).hover();
      await page.getByRole('link', { name: 'Macs (0)' }).click();

      await expect(page.getByRole('heading', { name: 'Macs' })).toBeVisible();
      await expect(page).toHaveTitle('Macs');
      await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=18_46');
      await expect(page.getByText('There are no products to list')).toBeVisible();
      
      await page.getByRole('link', { name: 'Continue' }).click();
      await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
      await expect(page).toHaveTitle('Your Store');
  });

  test('Windows',async({page})=>{
    await page.getByRole('link', { name: 'Laptops & Notebooks', exact: true }).hover();
    await page.getByRole('link', { name: 'Windows (0)' }).click();
    
    await expect(page.getByRole('heading', { name: 'Windows' })).toBeVisible();
    await expect(page).toHaveTitle('Windows');
    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=18_45');
    await expect(page.getByText('There are no products to list')).toBeVisible();
    await page.getByRole('link', { name: 'Continue' }).click();

    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
    await expect(page).toHaveTitle('Your Store'); 
  });

  test('Show All Laptops & NoteBooks',async({page})=>{
    await page.getByRole('link', { name: 'Laptops & Notebooks', exact: true }).hover();
    await page.getByRole('link', { name: 'Show AllLaptops & Notebooks' }).click();

    await expect(page.getByRole('heading', { name: 'Laptops & Notebooks' })).toBeVisible();
    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=18');
    await expect(page).toHaveTitle('Laptops & Notebooks');
    await expect(page.getByText('Showing 1 to 5 of 5 (1 Pages)')).toBeVisible();
  });

});



test.describe('Component Test',()=>{
    
    test('Mice and Trackballs Test',async({page})=>{
      await page.getByRole('link', { name: 'Components', exact: true }).hover();
      await page.getByRole('link', { name: 'Mice and Trackballs (0)' }).click();

      await expect(page.getByRole('heading', { name: 'Mice and Trackballs' })).toBeVisible();
      await expect(page.getByText('There are no products to list')).toBeVisible();
      
      await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=25_29');
      await expect(page).toHaveTitle('Mice and Trackballs');
      await page.getByRole('link', { name: 'Continue' }).click();
      await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
      await expect(page).toHaveTitle('Your Store');

 });


    test('Monitors Test',async({page})=>{
        
  await page.getByRole('link', { name: 'Components', exact: true }).hover();
  await page.getByRole('link', { name: 'Monitors (2)' }).click();
  await expect(page.getByRole('heading', { name: 'Monitors' })).toBeVisible();
  await expect(page.getByText('Showing 1 to 2 of 2 (1 Pages)')).toBeVisible(); 
  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=25_28');
  await expect(page).toHaveTitle('Monitors');

});

    test('Printers Test',async({page})=>{

  await page.getByRole('link', { name: 'Components', exact: true }).hover();
  await page.getByRole('link', { name: 'Printers (0)' }).click();
  await expect(page.getByRole('heading', { name: 'Printers' })).toBeVisible;
  await expect(page.getByText('There are no products to list')).toBeVisible();
  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=25_30');
  await expect(page).toHaveTitle('Printers');
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
  await expect(page).toHaveTitle('Your Store');

});

test('Scanners Test',async({page})=>{

  await page.getByRole('link', { name: 'Components', exact: true }).hover();
  await page.getByRole('link', { name: 'Scanners (0)' }).click();
  await expect(page.getByRole('heading', { name: 'Scanners' })).toBeVisible;
  await expect(page.getByText('There are no products to list')).toBeVisible();
  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=25_31');
  await expect(page).toHaveTitle('Scanners');
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
  await expect(page).toHaveTitle('Your Store');

});

test('Web Cameras Test',async({page})=>{

  await page.getByRole('link', { name: 'Components', exact: true }).hover();
  await page.getByRole('link', { name: 'Web Cameras (0)' }).click();
  await expect(page.getByRole('heading', { name: 'Scanners' })).toBeVisible;
  await expect(page.getByText('There are no products to list')).toBeVisible();
  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=25_32');
  await expect(page).toHaveTitle('Web Cameras');
  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
  await expect(page).toHaveTitle('Your Store');

});

test('ShowAll Component Test',async({page})=>{
   
  await page.getByRole('link', { name: 'Components', exact: true }).hover();
  await page.getByRole('link', { name: 'Show AllComponents' }).click();
  await expect(page.getByRole('heading', { name: 'Components' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Refine Search' })).toBeVisible();
  await expect(page.locator('body')).toContainText(
    'Mice and Trackballs (0) Monitors (2) Printers (0) Scanners (0) Web Cameras (0)'
  );
  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=25');
  await expect(page).toHaveTitle('Components');

});

});

test('Tablets',async({page})=>{

  await page.getByRole('link', { name: 'Tablets' }).click();
  await expect(page.getByRole('heading', { name: 'Tablets' })).toBeVisible();
  await expect(page.getByText('Showing 1 to 1 of 1 (1 Pages)')).toBeVisible();
  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=57');
  await expect(page).toHaveTitle('Tablets');
});

test('Software Test',async({page})=>{
  await page.getByRole('link', { name: 'Software' }).click();
  await expect(page.getByRole('heading', { name: 'Software' })).toBeVisible();
  await expect(page.getByText('There are no products to list')).toBeVisible();
  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=17');
  await expect(page).toHaveTitle('Software');
  await page.getByRole('link', { name: 'Continue' }).click();

  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=common/home');
  await expect(page).toHaveTitle('Your Store');
});

test('Phones & PDAs Test',async({page})=>{

  await page.getByRole('link', { name: 'Phones & PDAs' }).click();
  await expect(page.getByRole('heading', { name: 'Phones & PDAs' })).toBeVisible();
  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=24');
  await expect(page).toHaveTitle('Phones & PDAs');

});


test('Cameras',async({page})=>{

  await page.getByRole('link', { name: 'Cameras' }).click();
  await expect(page.getByRole('heading', { name: 'Cameras' })).toBeVisible();
  await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=product/category&path=33');
  await expect(page).toHaveTitle('Cameras');

});
 

// 