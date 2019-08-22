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













// 表示 attrs 拥有的属性，是否obj 也拥有，且值相等。
var isMatch = function (obj, attrs) {
    const _keys = Object.keys(attrs);
    const length = _keys.length;
    if (!obj) {
        return false;
    }
    for (let i = 0; i < length; i++) {
        const key = _keys[i];
        if (attrs[key] !== obj[key] || (!key in obj)) {
            return false;
        }
    }

    return true;
};






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
