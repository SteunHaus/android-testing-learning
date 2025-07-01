export default class MainMenu {
    private amazonShopAppLocator = $('(//android.widget.TextView[@content-desc="Amazon Shopping"])[1]');

    public async openAmazonApp() {
        return await this.amazonShopAppLocator.click();
    }

    public async closeAmazonShop() {
        return await driver.terminateApp("com.amazon.mShop.android.shopping");
    }
}