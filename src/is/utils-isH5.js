/**
 * Date:2020/9/14
 * Desc:
 */
function isIos() {
    var ua = window.navigator.userAgent;
    return !!ua.match(/iphone|ipad|iPod/gi);
};

function isAndroid() {
    var ua = window.navigator.userAgent;
    return !!ua.match(/android/gi);
}

function isH5() {
    return isAndroid() || isIos();
}
