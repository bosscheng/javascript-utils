/*
* date: 2019-09-06
* desc:
*/
function getWeekRange(year, week) {
    let d = new Date(year, 0, 1);
    let time = d.getTime();
    let t = (week - 1) * 7 * 24 * 3600 * 1000;
    time += t;
    d = new Date(time);
    let w = d.getDay();
    let mon = new Date(time - (w - 1) * 24 * 3600 * 1000).getTime();
    let sun = new Date(time + ((7 - w) * 24 * 3600 * 1000)).getTime();
    return {
        mon,
        sun
    }
}
