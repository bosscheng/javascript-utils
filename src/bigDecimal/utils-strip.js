/**
 * 把错误的数据转正
 * strip(0.09999999999999998)=0.1
 */
function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
}