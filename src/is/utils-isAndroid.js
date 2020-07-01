/**
 * Date:2020/7/1
 * Desc:
 */
var isAndroid = function () {
    var ua = window.navigator.userAgent;
    return !!ua.match(/android/gi);
};
