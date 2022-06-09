//IE浏览器（IE11以上版本）
var utilsIsNewIE = function () {
    var ua = window.navigator.userAgent.toLowerCase();;
    return !!ua.match(/trident/gi);
};