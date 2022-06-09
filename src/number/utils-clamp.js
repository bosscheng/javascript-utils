/**
 * @desc
 *  取a,b,c 三个数的中间值。
 * @param num
 * @param a
 * @param b
 * @returns {*}
 */
function utilsClamp(a, b, c) {
    return Math.max(Math.min(a, Math.max(b, c)), Math.min(b, c));
}


/**
 * 确保值在指定范围内，否则“clamp”到最接近的最小值和最大值。
 * @param min
 * @param max
 * @param value
 * @returns {*}
 */
function utilsClamp2(min, max, value) {
    if (min > max) throw new Error('min cannot be greater than max');
    return value < min
        ? min
        : value > max
            ? max
            : value;
}
