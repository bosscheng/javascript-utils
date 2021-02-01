/*
* date: 2019-08-21
* desc:
*/
var isChrome = function () {
    // 这样存在问题的， 很多内核都是使用的chrome内核， 会导致判断不准确。
    return navigator.userAgent.indexOf("Chrome") > 0;
};
