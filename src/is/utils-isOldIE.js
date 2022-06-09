//IE浏览器（IE10与IE10以下版本）
var isOldIE = function () {
    var ua = window.navigator.userAgent.toLowerCase();;
    return !!ua.match(/msie/gi);
};
