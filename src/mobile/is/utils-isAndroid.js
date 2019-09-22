/*
* date: 2019-08-31
* desc:
*/
/*
 * 判断是否安卓移动设备
 * */
var isAndroid = function () {
    var UA = window.navigator.userAgent.toLowerCase();
    return (/android/i.test(UA));
};

//
var isAndroid2 = function () {
    var UA = window.navigator.userAgent.toLowerCase();
    return UA && UA.indexOf('android') > 0;
};
