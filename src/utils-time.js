function parseTime(time, cFormat) {
    if (arguments.length === 0) {
        return null
    }
    var format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    var date;
    if (typeof time === 'object') {
        date = time
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000;
        time = +time; // 转成int 型
        date = new Date(time)
    }
    var formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    };
    var time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        var value = formatObj[key]
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    });
    return time_str
}

/*
     *  当前时间日期格式转换
     * */
function currTimeFormat(formatStr) {
    var date = new Date();
    var str = formatStr;
    var Week = ['日', '一', '二', '三', '四', '五', '六'];
    str = str.replace(/yyyy|YYYY/, date.getFullYear());
    str = str.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date.getYear() % 100).toString() : '0' + (date.getYear() % 100));
    str = str.replace(/MM/, (date.getMonth() + 1) > 9 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1));
    str = str.replace(/M/g, (date.getMonth() + 1));
    str = str.replace(/w|W/g, Week[date.getDay()]);
    str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
    str = str.replace(/d|D/g, date.getDate());
    str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours());
    str = str.replace(/h|H/g, date.getHours());
    str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
    str = str.replace(/m/g, date.getMinutes());
    str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
    str = str.replace(/s|S/g, date.getSeconds());
    return str
}


function timeFormat(time, format) {
    var o = {
        "M+": time.getMonth() + 1, //month
        "d+": time.getDate(),    //day
        "h+": time.getHours(),   //hour
        "m+": time.getMinutes(), //minute
        "s+": time.getSeconds(), //second
        "q+": Math.floor((time.getMonth() + 3) / 3),  //quarter
        "S": time.getMilliseconds() //millisecond
    };
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (time.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
    return format;
}


/*
     1、< 60s, 显示为“刚刚”
     2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
     3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
     4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
     5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
     * */
function timeFormat2(time) {
    var date = new Date(time);
    var curDate = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 10;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var curYear = curDate.getFullYear();
    var curHour = curDate.getHours();
    var timeStr;

    if (year < curYear) {
        timeStr = year + "年" + month + '月' + day + '日' + hour + ':' + minute;
    } else {
        var pastTime = curDate - date;
        var pastH = pastTime / 3600000;

        if (pastH > curHour) {
            timeStr = month + '月' + day + '日 ' + hour + ':' + minute;
        } else if (pastH >= 1) {
            timeStr = '今天 ' + hour + ':' + minute + '分';
        } else {
            var pastM = curDate.getMinutes() - minute;
            if (pastM > 1) {
                timeStr = pastM + '分钟前';
            } else {
                timeStr = '刚刚';
            }
        }

    }

    return timeStr;
}
