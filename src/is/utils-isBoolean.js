/*
* date: 2019-08-21
* desc:
*/
var toString = Object.prototype.toString;

/**
 *
 * */
var isBoolean = function (value) {
    return value === true || value === false || toString.call(value) === "[object Boolean]";
};

/**
 *
 * */
var isBoolean2 = function (value) {
    return typeof value === 'boolean';
};
