/*
* date: 2019-11-13
* desc: 获取某年的第一天。
*/
function getYearFirstDay(time) {
    let date = time ? new Date(time) : new Date();
    let year = date.getFullYear();
    let curYearFirstDay = new Date(year, 0, 1);
    return curYearFirstDay.getTime();
}
