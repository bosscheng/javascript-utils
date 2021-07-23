/**
 * 是否是数字
 * @param value
 * @returns {boolean}
 */
function number(value) {
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
}