import { test, expect } from './fixtures/myfixtures';

test.describe('Login Page', { tag:'@login' },() => {

    test.beforeEach(async ({ loginPage }) => {
        await loginPage.loadPage();
        await loginPage.loginPage(process.env.USERNAME, process.env.PASSWORD);
    });


    test('Accessing the Login page and logging in successfully', async ({ loginPage }) => {
        expect(await loginPage.page.locator('h6').innerText()).toBe('Dashboard');
        await loginPage.page.screenshot({path: './tests/screenshot/login.png', fullPage: true});
    });

});