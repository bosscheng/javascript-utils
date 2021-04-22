/**
 * 金额格式转换成数字类型
 * @param {string} str 金额
 * @return {number}
 */
function reverseMoney(str) {
    return parseFloat(str.replace(/[^\d.-]/g, ''));
}