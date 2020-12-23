/**
 * Date:2020/7/1
 * Desc:
 */
var isAndroid = function () {
    var ua = window.navigator.userAgent.toLowerCase();
    return !!ua.match(/android/gi);
};
