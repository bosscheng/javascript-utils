/*
* date: 2019-08-31
* desc:
*/
/*
 * 获取滚动条距顶部和左边的距离
 * 利用 body.scrollTop 和  documentElement.scrollTop
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
