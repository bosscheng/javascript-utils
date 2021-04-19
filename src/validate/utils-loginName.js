/**
 * @desc 包含a-z,A-Z ,0-9 横线
 * @param str
 * @returns {boolean}
 */
function loginName(str) {
    return /^[a-zA-Z0-9-]+$/.test(str)
}

function loginName2(str) {
    return /^(?=.*[a-zA-Z])[a-zA-Z0-9_-]{6,20}$/.test(str);
}