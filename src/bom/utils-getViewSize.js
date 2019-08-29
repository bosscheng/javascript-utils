/*
* date: 2019-08-29
* desc:
*/
/*
 * 获取窗口可视范围的宽和高
 @return {array} [width,height]
 * */
var getViewSize = function () {
    var de = document.documentElement;
    var db = document.body;
    var viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth;
    var viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight;
    return [viewW, viewH];
};
