/*
* date: 2019-08-21
* desc: time 时间的上个星期，周一  周日 时间
*/

function getLastWeek(time) {
    let result = {
        start: '',
        end: ''
    };
    let date = time ? new Date(time) : new Date();
    let dateTime = date.getTime();
    // 指定一个星期的第几天
    let day = date.getDay();
    let oneDayTime = 24 * 3600 * 1000;
    let mondayTime = dateTime - (day - 1) * oneDayTime;
    result.start = mondayTime - 7 * oneDayTime;
    result.end = mondayTime - oneDayTime;
    return result;
}
