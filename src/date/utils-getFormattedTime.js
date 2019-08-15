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
