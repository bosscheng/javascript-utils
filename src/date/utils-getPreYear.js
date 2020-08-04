/**
 * Date:2020/7/6
 * Desc: 获取{time}前{num}年的第一天的时间戳
 */


function getPreYear(time, num) {
    let date = time ? new Date(time) : new Date();
    let year = date.getFullYear();
    let curYearFirstDay = new Date(year - num, 0, 1);
    return curYearFirstDay.getTime();
}
