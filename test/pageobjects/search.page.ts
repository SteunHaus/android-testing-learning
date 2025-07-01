export default class SearchPage {
    private searchElement = $('~Search Amazon');
    private searchField = $('//android.widget.EditText[@resource-id="com.amazon.mShop.android.shopping:id/rs_search_src_text"]');

    public async waitForLoad() {
        return await this.searchElement.waitForExist();
    }

    public async typeTextInSearchFieldAndSendIt(searchString: string) {
        await this.searchField.setValue(searchString);
        return await driver.pressKeyCode(66);
    }
}