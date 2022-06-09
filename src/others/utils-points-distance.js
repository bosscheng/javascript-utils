/**
 * 计算两点 p1 和 p2 之间的距离。
 * @param x0
 * @param y0
 * @param x1
 * @param y1
 */
function utilsPointsDistance([x0, y0], [x1, y1]) {
    Math.hypot(x1 - x0, y1 - y0)

}