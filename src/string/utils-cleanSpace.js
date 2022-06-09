/**
 * 清除字符串的空格、回车、换行符。
 * @param str
 * @returns {*}
 */
function utilsCleanSpace(str) {
    return str.replace(/[\r\n]/g, "").replace(/\s/g, "");
}