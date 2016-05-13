export class Url {
    public static fixTemplateUrl(url: string): string {
        return url + '.web.html';
    }

    public static fixStyleUrls(urls: Array<string>): Array<string> {
        return urls.map(url => url + '.web.css');
    }
}