/*
* date: 2019-08-29
* desc:
*/
// get type
var getType = function (value) {
    var toString = Object.prototype.toString;
    return toString.call(value).replace(/^\[object/, '').replace(/\]$/, '');
};
