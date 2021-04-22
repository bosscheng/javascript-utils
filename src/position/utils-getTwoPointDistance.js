function getTwoPointDistance(point1, point2) {
    const minusX = Math.abs(point1.x - point2.x);
    const minusY = Math.abs(point1.y - point2.y);
    // 直角三角形，算斜边长度
    return Math.sqrt(minusX * minusX + minusY * minusY);
}