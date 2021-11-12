/**
 * 获取某一个月有多少天
 * @param year
 * @param month
 * @returns {number}
 */
function getDayCountOfMonth(year,month){
    if (month === 3 || month === 5 || month === 8 || month === 10) {
        return 30;
    }

    if (month === 1) {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            return 29;
        } else {
            return 28;
        }
    }

    return 31;
}