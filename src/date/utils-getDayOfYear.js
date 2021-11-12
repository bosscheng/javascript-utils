/**
 * 查找日期位于一年中的第几天
 * @param date
 * @returns {number}
 */
function utilsGetDayOfYear(date) {
    return Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
}