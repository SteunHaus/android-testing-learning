export default class Scroller {
    public async scrollToElementViaAccessibilityId(accessibilityId: string) {
        await $(`android=new UiScrollable(new UiSelector().className("android.webkit.WebView").instance(0)).setAsVerticalList().scrollIntoView(new UiSelector().description("${accessibilityId}"))`);
    }

    public async scrollOneTimeForward() {
        await $('android=new UiScrollable(new UiSelector().className("android.webkit.WebView").instance(0)).setAsVerticalList().scrollForward()');
    }
}