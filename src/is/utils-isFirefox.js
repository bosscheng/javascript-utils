/**
 * Date:2020/7/1
 * Desc:
 */
var isFirefox = function () {
    var ua = window.navigator.userAgent;
    return !!ua.match(/Firefox/gi);
};
