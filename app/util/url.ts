export class Url {
    public static fixTemplateUrl(url: string): string {
        return url + '.mobile.html';
    }
    
    public static fixStyleUrls(urls: Array<string>): Array<string> {
        var fixedUrls = [];
        urls.forEach(url => {
            fixedUrls.push(url + '.common.css');
            fixedUrls.push(url + '.css');
        });
        return fixedUrls;
    }
}