/*
* date: 2019-08-21
* desc: 获取 time 时间内的 周一  周日 时间。
*/
function getWeek(time) {
    let result = {
        start: '',
        end: ''
    };
    let date = time ? new Date(time) : new Date();
    let dateTime = date.getTime();
    // 指定一个星期的第几天
    let day = date.getDay();
    let oneDayTime = 24 * 3600 * 1000;
    result.start = dateTime - (day - 1) * oneDayTime;
    result.end = dateTime + (7 - day) * oneDayTime;

    return result;
}
