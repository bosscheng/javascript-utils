/**
 * @desc 包含a-z,A-Z ,0-9 横线
 * @param str
 * @returns {boolean}
 */
function loginName(str) {
    return /^[a-zA-Z0-9-]+$/.test(str)
}

/**
 * @desc 强制必须得有(a-zA-Z)一次，其他的6到20位，必须得是 a-zA-Z0-9_- 其中。
 * @param str
 * @returns {boolean}
 */
function loginName2(str) {
    return /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{6,20}$/.test(str);
}