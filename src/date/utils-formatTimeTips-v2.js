/*
* date: 2019-08-31
* desc: 秒(second) 转换为 00:00 或者 00:00:00格式。
*/
function utilsFormatTimeTipsV2(second) {
    const add0 = num => (num < 10 ? `0${num}` : String(num));
    const hour = Math.floor(second / 3600);
    const min = Math.floor((second - hour * 3600) / 60);
    const sec = Math.floor(second - hour * 3600 - min * 60);
    return (hour > 0 ? [hour, min, sec] : [min, sec]).map(add0).join(':');
}