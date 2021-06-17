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