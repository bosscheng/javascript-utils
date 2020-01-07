const PRECISION = 0.00001;

// is number equal
function isNumberEqual(a, b, precision = PRECISION) {
    // 绝对值
    return Math.abs((a - b)) < precision;
}
