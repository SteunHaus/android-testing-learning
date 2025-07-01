export default class SearchResultsPage {
    private searchResultsField = $('//android.view.View[@resource-id="search"]');

    public async waitForLoad() {
        return await this.searchResultsField.waitForExist();
    }

    public async selectFirstSearchResult() {
        await driver.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: 200, y: 1300 },
                { type: 'pointerDown', button: 0 },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
        return await driver.releaseActions();
    }
}