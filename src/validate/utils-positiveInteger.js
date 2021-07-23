/**
 * Date:2021/1/5
 * Desc: 正整数 校验使用到的正则表达式。
 */

// 正整数
function positive_integer(str) {
    return /^[1-9]+\\d*$/.test(str);
}

