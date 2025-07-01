export default class CategoryPage {
    private carousel = $('//android.view.View[@resource-id="anonCarousel1"]');

    public async waitForLoad() {
        return await this.carousel.waitForExist();
    }

    public async openFirstOffer() {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 300, y: 1600 },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        return await driver.releaseActions();
    }
}