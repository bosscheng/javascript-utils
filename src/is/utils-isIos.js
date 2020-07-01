/**
 * Date:2020/7/1
 * Desc:
 */
var isIos = function () {
    var ua = window.navigator.userAgent;
    return !!ua.match(/iphone|ipad|iPod/gi);
};
