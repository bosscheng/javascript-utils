/*
* date: 2019-08-21
* desc:
*/
/**
 *
 * @type {function(*=): boolean}
 */
var isUrlSameOrigin = function () {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originUrl;

    function resolveUrl(url) {
        var href = url;

        if (msie) {
            urlParsingNode.setAttribute('href', href);
            href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);


        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                urlParsingNode.pathname :
                '/' + urlParsingNode.pathname
        };
    }

    originUrl = resolveUrl(window.location.href);


    return function (requestUrl) {
        var paresd = (isString(requestUrl) ? resolveUrl(requestUrl) : requestUrl);
        return paresd.protocol === originUrl.protocol && paresd.host === originUrl.host;
    };

}();
