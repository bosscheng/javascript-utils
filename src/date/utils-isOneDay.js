/**
 * Date: 6/17/20
 * Desc: ${time} 是 ${oneDay} 哪一天
 */

function isOneDay(time, oneDay) {
    // Sunday - Saturday : 0 - 6
    const WEEK_LIST = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    const date = time ? new Date(time) : new Date();
    const day = date.getDay();
    return oneDay ? oneDay === WEEK_LIST[day] : false;
}