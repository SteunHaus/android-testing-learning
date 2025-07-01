import { expect } from '@wdio/globals'
import MainMenu from '../pageobjects/main.menu';
import HomePage from '../pageobjects/home.page';
import CategoryPage from '../pageobjects/category.page';
import OfferPage from '../pageobjects/offer.page';

describe('Amazon app actions for selecting category, then offer via main page', () => {
    beforeEach(async () => {
        await new MainMenu().openAmazonApp();
    });

    afterEach(async () => {
        await new MainMenu().closeAmazonShop();
    });

    it('User can browse main page and select any offer after selecting category', async () => {
        const homePage = new HomePage();
        await homePage.waitForLoad();
        await homePage.openHeadphonesCategory();

        const categoryPage = new CategoryPage();
        await categoryPage.waitForLoad();
        await categoryPage.openFirstOffer();

        const offerPage = new OfferPage();
        await offerPage.waitForLoad();
        await offerPage.openMainImgAndWaitForLoad();
        
        await expect(offerPage.thumbnailView).toExist();
    });
});