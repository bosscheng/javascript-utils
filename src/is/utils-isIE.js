/*
* date: 2019-08-21
* desc:
*/
/*
 判断浏览器
 */
// 是否是IE
var isIE = function () {
    let UA = window.navigator.userAgent.toLowerCase();
    return UA && /msie|trident/.test(UA);
};

var isIE8 = function () {
    let UA = window.navigator.userAgent.toLowerCase();
    return UA && UA.indexOf('msie 8.0') > 0;
};

var isIE9 = function () {
    let UA = window.navigator.userAgent.toLowerCase();
    return UA && UA.indexOf('msie 9.0') > 0;
};

var isEDGE = function () {
    let UA = window.navigator.userAgent.toLowerCase();
    return UA && UA.indexOf('edge/') > 0;
}
