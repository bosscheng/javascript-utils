/**
 * Date:2020/7/1
 * Desc:
 */
var isIos = function () {
    var ua = window.navigator.userAgent.toLowerCase();
    return !!ua.match(/ios|iphone|ipad|iPod/gi);
};
