/*
* author: wancheng
* date: 2018-12-25
* desc:
*/


/**
 * @desc 获取某个月份到底有多少天
 * @param year
 * @param month
 * @returns {number}
 */
function getNumberOfDays(year, month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 29 : 28;
    }
}


/**
 * @desc 格式化日期，并且讲0-9的月份自动变成01-09
 * @param date
 * @param onlyDate
 * @returns {string}
 */
function getFormattedTime(date, onlyDate) {
    function _addZeroIfNeeded(num) {
        return (num < 10 ? '0' : '') + num;
    }

    // 必须是 Date 类型的数据
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        return '';
    }

    return date.getUTCFullYear() + "-" + _addZeroIfNeeded(date.getUTCMonth() + 1) + "-" + _addZeroIfNeeded(date.getUTCDate()) +
        (onlyDate ? "" : " " + _addZeroIfNeeded(date.getUTCHours()) + ":" + _addZeroIfNeeded(date.getUTCMinutes()) + ":" +
            _addZeroIfNeeded(date.getUTCSeconds()));
}
