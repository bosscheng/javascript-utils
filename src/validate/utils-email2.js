/**
 * email
 * @param str
 * @returns {boolean}
 */
function email2(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}