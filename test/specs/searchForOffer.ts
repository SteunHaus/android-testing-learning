import { expect } from '@wdio/globals'
import MainMenu from '../pageobjects/main.menu';
import HomePage from '../pageobjects/home.page';
import SearchPage from '../pageobjects/search.page';
import SearchResultsPage from '../pageobjects/search.results.page';
import OfferPage from '../pageobjects/offer.page';

describe('Amazon app actions for searching for offer via main page', () => {
    const testData = [
        { productName: 'bosch coffee machine' },
        { productName: 'board game' }
    ]

    beforeEach(async () => {
        await new MainMenu().openAmazonApp();
    });

    afterEach(async () => {
        await new MainMenu().closeAmazonShop();
    });
    
    testData.forEach(({ productName }) => {
        it('User can browse main page and search for a specific offer', async () => {
            const homePage = new HomePage();
            await homePage.waitForLoad();
            await homePage.openSearchMode();

            const searchPage = new SearchPage();
            await searchPage.waitForLoad();
            await searchPage.typeTextInSearchFieldAndSendIt(productName);

            const searchResultsPage = new SearchResultsPage();
            await searchResultsPage.waitForLoad();
            await searchResultsPage.selectFirstSearchResult();

            const offerPage = new OfferPage();
            await offerPage.waitForLoad();
            await offerPage.openMainImgAndWaitForLoad();
            
            await expect(offerPage.thumbnailView).toExist();
        });
    });    
});