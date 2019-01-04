/*
* author: wancheng
* date: 2018-12-29
* desc:
*/


/**
 * string href to object href
 * @param href
 * @returns {*}
 */
function getHrefObject(href) {
    var a = document.createElement('a');

    a.href = href;

    return {
        href: a.href,
        host: a.host,
        hostname: a.hostname,
        pathname: a.pathname,
        search: a.search,
        protocol: a.protocol,
        hash: a.hash
    };
}
