/*
* date: 2019-08-31
* desc:
*/
/*
 * 解决 offsetX 兼容性问题
 * */
var getOffset = function (e) {
    var target = e.target;
    var eventCoord;
    var pageCoord;
    var offsetCoord;

    // 计算当前触发元素到文档的距离
    pageCoord = getPageCoord(target);

    // 计算光标到文档的距离
    eventCoord = {
        X: window.pageXOffset + e.clientX,
        Y: window.pageYOffset + e.clientY
    };

    // 相减获取光标到第一个定位的父元素的坐标
    offsetCoord = {
        X: eventCoord.X - pageCoord.X,
        Y: eventCoord.Y - pageCoord.Y
    };
    return offsetCoord;
};
