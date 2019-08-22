/*
* date: 2019-08-21
* desc:
*/
var toString = Object.prototype.toString;

/**
 *
 * */
var isFunction = function (value) {
    return toString.call(value) === '[object Function]';
};

/**
 * @doc function
 * @name var isFunctionByNg
 * @function
 *
 * @description
 *  判断参数是否是function  类型
 * @param {*} 参数
 *
 * @return {boolean} 如果参数是function 类型的话，返回true，否则返回false
 *
 * */
var isFunction2 = function (value) {
    return typeof value === 'function';
};
