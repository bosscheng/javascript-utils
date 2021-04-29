
var isDate = function (value) {
    var toString = Object.prototype.toString;
    return toString.call(value) === "[object Date]";
};


/**
 * 根据${src}时间来查询是属于第几周
 * @param src
 * @returns {null|number}
 */
const getWeekNumber = function(src) {
    //
    if (!isDate(src)) return null;
    //
    const date = new Date(src.getTime());
    //
    date.setHours(0, 0, 0, 0);
    // Thursday in current week decides the year.
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    // January 4 is always in week 1.
    const week1 = new Date(date.getFullYear(), 0, 4);
    // Adjust to Thursday in week 1 and count number of weeks from date to week 1.
    // Rounding should be fine for Daylight Saving Time. Its shift should never be more than 12 hours.
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
};