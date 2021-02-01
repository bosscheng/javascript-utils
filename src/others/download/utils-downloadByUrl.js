/**
 * Date:2020/10/28
 * Desc:
 * @param url {string} 文件资源url
 * @param fileName {string} [outName] 下载保存文件名称，可选
 */
function downloadByUrl(url, fileName) {
    const isChrome = window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    const isSafari = window.navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if (/(iP)/g.test(window.navigator.userAgent)) {
        console.error('您的浏览器不支持下载!');
        return false;
    }

    if (isChrome || isSafari) {
        const link = document.createElement('a');
        link.href = url;
        link.target = "_blank";

        if (link.download !== undefined) {
            link.download = fileName || url.substring(url.lastIndexOf('/') + 1, url.length);
        }

        if (document.createEvent) {
            const e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }
    window.open(url, "_blank");
    return true;
}
