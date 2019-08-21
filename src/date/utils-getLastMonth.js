/*
* date: 2019-08-20
* desc: time所在时间的上一个月的 月初 月末 时间
*/
function getLastMonth(time) {
    let result = {
        start: '',
        end: ''
    };

    let date = time ? new Date(time) : new Date();
    let year = date.getFullYear();
    // 第几个月
    let month = date.getMonth();

    let curMonthFirstDay = new Date(year, month, 1);

    let bMonth = month - 1;
    let bYear = year;
    if (bMonth === -1) {
        bYear = year - 1;
        bMonth = 11;
    }

    let bStartDate = new Date(bYear, bMonth, 1);
    let bEndDate = new Date(curMonthFirstDay.getTime() - (24 * 3600 * 1000));

    result.start = bStartDate;
    result.end = bEndDate;

    return result;
}
