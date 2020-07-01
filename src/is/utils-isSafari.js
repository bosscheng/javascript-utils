/**
 * Date:2020/7/1
 * Desc:
 */
var isSafari = function () {
    var ua = window.navigator.userAgent;
    return !ua.match(/Chrome/gi) && !!ua.match(/Safari/gi);
}
