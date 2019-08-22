/*
* date: 2019-08-21
* desc:
*/

var toString = Object.prototype.toString;

// 优先去根据ECMAScript 5的方法
var isArray = Array.isArray || function (value) {
    return toString.call(value) === '[object Array]';
};
