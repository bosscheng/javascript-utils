/*
* date: 2019-08-31
* desc:
*/

// 秒 转换为 00:00:00 格式。
function formatTimeTips(time) {
    var result;

    //
    if (time > -1) {
        var hour = Math.floor(time / 3600);
        var min = Math.floor(time / 60) % 60;
        var sec = time % 60;

        sec = Math.round(sec);

        if (hour < 10) {
            result = '0' + hour + ":";
        } else {
            result = hour + ":";
        }

        if (min < 10) {
            result += "0";
        }
        result += min + ":";
        if (sec < 10) {
            result += "0";
        }
        result += sec.toFixed(0);
    }

    return result;
}
