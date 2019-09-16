/*
* date: 2019-08-29
* desc:
*/

function toNumber(value) {
    if (typeof value !== 'string') {
        return value;
    } else {
        // 转换成 number 类型
        var parsed = Number(value);
        return isNaN(parsed) ? value : parsed;
    }
}

function toNumber2(value) {
    const n = parseFloat(value);
    return isNaN(n) ? value : n;
}

/**
 * isNaN
 * 参数值为 NaN 或字符串、对象、undefined等非数字值则返回 true
 * */
