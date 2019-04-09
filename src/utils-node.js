/**
 * 二蛋，记得添加备注啊
 * Author: Administrator
 * Data: 14-12-18
 */

var _setTimeout = function (func, delay) {
    return window.setTimeout(function () {
        try {
            func();
        } catch (x) {
            // 报错！
        }

    }, delay);
}


var getNowTime = function () {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    return year + '-' + month + '-' + day + " " + hour + ":" + minutes + ":" + seconds;
}

var _log = function () {
    _showLog("log", arguments);
}

var _showLog = function (level, args) {
    if (window.console) {
        var logger = window.console[level];
        if (typeof logger === "Function") {
            logger.apply(window.console, args);
        }
    }
}

var log = function () {
    var currentTime = "[" + getNowTime() + "]";
    _log(currentTime, arguments);
}
