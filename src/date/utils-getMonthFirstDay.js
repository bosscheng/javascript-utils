/*
* date: 2019-11-13
* desc:
*/
function getMonthFirstDay(time) {
    let date = time ? new Date(time) : new Date();
    let year = date.getFullYear();
    // 第几个月
    let month = date.getMonth();
    let curMonthFirstDay = new Date(year, month, 1);

    return curMonthFirstDay.getTime();
}
