function downloadByUrl(url, target, fileName) {

    function _openWindow(url, options) {
        const feature = [];
        if (options.noopener) {
            feature.push('noopener=yes');
        }

        if (options.noreferrer) {
            feature.push('noreferrer=yes')
        }
        window.open(url, options.target, feature.join(','));
    }


    const isChrome = window.navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    const isSafari = window.navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if (isChrome || isSafari) {
        const link = document.createElement('a');
        link.href = url;
        link.target = target;

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

    if (url.indexOf('?') === -1) {
        url += '?download';
    }

    _openWindow(url, {target});
    return true;
}