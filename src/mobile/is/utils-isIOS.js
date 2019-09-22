/*
* date: 2019-08-31
* desc:
*/
/*
 * 是否是苹果移动设备访问的
 * */
var isApple = function () {
    return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
}

var isIOS = function () {
    var UA = window.navigator.userAgent.toLowerCase();
    return UA && /iphone|ipad|ipod|ios/.test(UA);
};
