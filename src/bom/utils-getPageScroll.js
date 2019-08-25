/*
* date: 2019-08-23
* desc:
*/
/*
 * 获取到页面scrollTop
 * */
var getPageScrollTop = function () {
    var a = document;
    return a.documentElement.scrollTop || a.body.scrollTop;
};

var getPageScrollLeft = function () {
    var a = document;
    return a.documentElement.scrollLeft || a.body.scrollLeft;
};
