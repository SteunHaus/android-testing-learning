import Scroller from "../helpers/scroller";

export default class HomePage {
    private searchField = $('//android.widget.ImageButton[@resource-id="com.amazon.mShop.android.shopping:id/chrome_search_box"]');
    private headphonesCategory = $('~Headphones');

    public async waitForLoad() {
        return await this.searchField.waitForExist();
    }

    public async openSearchMode() {
        return await this.searchField.click();
    }

    public async openHeadphonesCategory() {
        await new Scroller().scrollToElementViaAccessibilityId('Headphones');
        return await this.headphonesCategory.click();
    }
}