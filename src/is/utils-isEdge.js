// Edge 浏览器
var isFirefox = function () {
    var ua = window.navigator.userAgent.toLowerCase();
    return !!ua.match(/edge/gi);
};
