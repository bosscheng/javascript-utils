/*
* date: 2019-08-31
* desc:
*/


var _getPageCoord = function (element) {
    var coord = {X: 0, Y: 0};
    // 计算从当前触发元素到根节点为止，
    // 各级 offsetParent 元素的 offsetLeft 或 offsetTop 值之和
    while (element) {
        coord.X += element.offsetLeft;
        coord.Y += element.offsetTop;
        element = element.offsetParent;
    }
    return coord;
};


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
