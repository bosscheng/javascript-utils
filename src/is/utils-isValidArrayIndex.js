/*
* date: 2019-09-16
* desc:
*/
function isValidArrayIndex(val) {
    const n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
}

/**
 * 你可以用这个方法来判定一个数字是否是有限数字。
 * isFinite 方法检测它参数的数值。如果参数是 NaN，正无穷大或者负无穷大，会返回false，其他返回 true。
 * */
