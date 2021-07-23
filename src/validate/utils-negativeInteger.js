/**
 * Date:2021/1/5
 * Desc: 负整数
 */

// 负整数
function negative_integer(str) {
    return /^-[1-9]+\\d*$/.test(str);
}
