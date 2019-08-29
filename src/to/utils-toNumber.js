/*
* date: 2019-08-29
* desc:
*/

function toNumber(value) {
    if (typeof value !== 'string') {
        return value;
    }
    else {
        // 转换成 number 类型
        var parsed = Number(value);
        return isNaN(parsed) ? value : parsed
    }
}
