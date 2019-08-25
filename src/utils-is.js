/**
 * utils is 判断
 * Author: bosscheng
 * Data: 14-12-4
 */

var toString = Object.prototype.toString;
var AP = Array.prototype;

/**
 * is 判断
 ***/
// 对于 "Arguments" ,"Function" ,'String' ,'Number','Date' ,'RegExp' 这几种类型，可以通过 toString.call(value) === "[object xxx]" 来判断。

/**
 * is 判断 开始
 * */
var isType = function (type) {
    return function (obj) {
        return Object.prototype.toString.call(obj) === "[object " + type + "]";
    };
};

var toString = {}.toString;
var isType2 = function (value, type) {
    return toString.call(value) === '[object ' + type + ']';
};

// get type
var getType = function (value) {
    return toString.call(value).replace(/^\[object/, '').replace(/\]$/, '');
};


var isObject = isType("Object");
var isArray = Array.isArray || isType("Array");
var isFunction = isType("Function");
var isString = isType("String");

/**
 * is 判断 结束
 ***/
