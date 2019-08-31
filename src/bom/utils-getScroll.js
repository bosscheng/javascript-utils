/*
* date: 2019-08-31
* desc:
*/
/*
 * 获取网页被卷去的位置
 * */
var getScrollXY = function () {
    return document.body.scrollTop ? {
        x: document.body.scrollLeft,
        y: document.body.scrollTop
    } : {
        x: document.documentElement.scrollLeft,
        y: document.documentElement.scrollTop
    };
};
