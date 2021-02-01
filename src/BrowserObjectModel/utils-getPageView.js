/*
* date: 2019-08-23
* desc:
*/

/*
 * 获取页面可视高度
 * */
var getPageViewHeight = function () {
    var d = document, a = d.compatMode === "BackCompat"
        ? d.body
        : d.documentElement;
    return a.clientHeight;
};

/*
 * 获取页面的宽度
 * */
var getPageViewWidth = function () {
    var d = document, a = d.compatMode === "BackCompat"
        ? d.body
        : d.documentElement;
    return a.clientWidth;
};


/*
 * 获取页面宽度
 * */
var getPageWidth = function () {
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode === "BackCompat"
        ? a
        : g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
};

/*
 * 获取页面的高度
 * */
var getPageHeight = function () {
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode === "BackCompat"
        ? a
        : g.documentElement;
    return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
};
