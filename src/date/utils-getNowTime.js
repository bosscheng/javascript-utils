/*
* date: 2019-08-23
* desc: 获取当前时间的 xx-xx-xx xx:xx:xx 格式
*/
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
