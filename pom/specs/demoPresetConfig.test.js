// https://jestjs.io/docs/expect
const { chromium } = require('playwright');
const HomePage = require('../models/Home.page');
const LoginPage = require('../models/Login.page');

describe('Applitools demo page', () => {
    jest.setTimeout(400000);
     let homePage  = null;
    let loginPage  = null;

    beforeAll( async ()=>{
        // we launch browser and navigate to the loginpage
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        await loginPage.navigate("https://demo.applitools.com/index.html");
    });

    afterAll( async ()=>{
        // closing browser
        await context.close();
        await browser.close();
    });
    
    it('Should be able to login', async() => {
        await reporter.description("Should be able to login")
        await reporter.startStep("----------")
       await loginPage.login("dharitreesahoo1@gmail.com","mymother1978@");
        const screenshotBuffer = await page.screenshot();
        await reporter.addAttachment("username", screenshotBuffer, "image/png");
       await reporter.endStep("----------")
       expect(await page.title()).not.toBeNull();
    })

    it('Should have total balance of $300',  async() => {
       expect(await homePage.getBalance('total')).toBe('$350');
    })

    it('Should have credit available of $17800',  async() => {
        expect(await homePage.getBalance('credit')).toBe('$17,800');
    })

    it('Should have due today of $180',  async() => {
        expect(await homePage.getBalance('due')).toBe('$180');
    })
});