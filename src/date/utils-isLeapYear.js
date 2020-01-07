/*
* date: 2020-01-07
* desc: 是否是闰年
*/
function isLeapYear(year) {
    if ((year % 4) === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true
    }
    return false;
}
