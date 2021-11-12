/**
 * 检查日期是否有效
 * @param value
 * @returns {boolean}
 */
function utilsIsDateValid(value) {
    return !Number.isNaN(new Date(value).valueOf());
}