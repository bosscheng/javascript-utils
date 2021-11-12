/**
 * 获取某一个月的第一天
 * @param date
 * @returns {number}
 */
function getFirstDayOfMonth(date){
    const temp = new Date(date.getTime());
    temp.setDate(1);
    return temp.getTime();
}