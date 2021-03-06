// 获取{time}前{num}月的(月初-月末)的时间戳
// 默认是上一个月的时间。
function getPreMonth(time, num) {
    let result = {
        start: '',
        end: ''
    };

    num = (num === null || num === undefined) ? 1 : num;

    let date = time ? new Date(time) : new Date();
    //
    let year = date.getFullYear();
    // 第几个月
    let month = date.getMonth();
    //
    let curMonthFirstDay = new Date(year, month, 1);
    //
    let tempYear = 0;
    let tempNum = num;
    // 超过一年
    if (num / 12 >= 1) {
        tempYear = parseInt(num / 12, 10);
        tempNum = parseInt(num % 12, 10);
    }

    let bMonth = month - tempNum;
    let bYear = year - tempYear;


    let bStartDate = new Date(bYear, bMonth, 1);
    let bEndDate = new Date(curMonthFirstDay.getTime() - (24 * 3600 * 1000));

    result.start = bStartDate.getTime();
    result.end = bEndDate.getTime();

    return result;
}
