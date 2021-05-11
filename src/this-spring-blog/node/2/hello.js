/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-30 10:34:00
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-09 20:08:41
 */
var add = require('bindings')('hello');

console.log(add.hello());

function getNowTime() {
    var date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.date = date.getDate();
    this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    this.milliSeconds = date.getMilliseconds();
    var currentTime = this.year+'-'+this.month + '-' + this.date + ' ' + this.hour + ':' + this.minute + ':' + this.second + '.' + this.milliSeconds;
    return currentTime;
};
setInterval(() => {console.log(getNowTime())}, 1 * 100)