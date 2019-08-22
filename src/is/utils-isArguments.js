/*
* date: 2019-08-21
* desc:
*/

var toString = Object.prototype.toString;

/**
 *
 * */
var isArguments = function (value) {
    return toString.call(value) === "[object Arguments]";
};
