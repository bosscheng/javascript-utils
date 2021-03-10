/*
* date: 2019-08-31
* desc: 分(minute) 转换为 00:00 格式。
*/

function formatMinTimeTips(time) {
    var result;

    //
    if (time > -1) {
        var hour = Math.floor(time / 60) % 60;
        var min = time % 60;

        min = Math.round(min);

        if (hour < 10) {
            result = '0' + hour + ":";
        } else {
            result = hour + ":";
        }

        if (min < 10) {
            result += "0";
        }
        result += min + ":";
    }

    return result;
}
