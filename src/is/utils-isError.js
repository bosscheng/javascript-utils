/*
* date: 2019-08-21
* desc:
*/
var isError = function (value) {
    var toString = Object.prototype.toString;
    return toString.call(value) === '[object Error]';
};
