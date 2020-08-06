/*
* date: 2019-08-21
* desc:
*/
var toString = Object.prototype.toString;
var isBlob = function (value) {
    return toString.call(value) === '[Object Blob]';
};
