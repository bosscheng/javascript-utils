/*
* date: 2019-08-31
* desc:
*/
/*
 *  计算当前触发元素到文档的距离
 * */
var getPageCoord = function (element) {
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
