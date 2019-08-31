/*
* date: 2019-08-31
* desc:
*/
/*
 * 判断是否移动设备访问
 * */
var isMobileUserAgent = function () {
    return (/iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(window.navigator.userAgent.toLowerCase()));
}
