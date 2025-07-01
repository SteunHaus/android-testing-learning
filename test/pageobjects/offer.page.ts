export default class OfferPage {
    public thumbnailView = $('//android.view.ViewGroup[@resource-id="thumbnails-view"]');

    public async waitForLoad() {
        await driver.pause(9000);
    }

    public async openMainImg() {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 500, y: 1300 },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        return await driver.releaseActions();
    }

    public async openMainImgAndWaitForLoad() {
        this.openMainImg();
    }
}