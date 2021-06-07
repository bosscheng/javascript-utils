/*
* date: 2019-08-21
* desc:
*/

var toString = Object.prototype.toString;

// 优先去根据ECMAScript 5的方法
function isArray(value) {
    return toString.call(value) === '[object Array]';
};


function isArray2(value) {
    return value && Array.isArray(value);
}