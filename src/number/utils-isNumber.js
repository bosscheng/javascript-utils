/*
* date: 2019-08-21
* desc:
*/
/**
 * @doc function
 * @name var isNumberByNg
 * @function
 *
 * @description
 *  判断参数是否是 number类型
 *
 * @param {*} 参数
 * @return {boolean} 如果参数为number类型的话，返回true，否则返回false
 *
 * */
var isNumber = function (value) {
    return typeof value === "number";
};

var toString = Object.prototype.toString;
/**
 *
 *
 * */
var isNumber2 = function (value) {
    return toString.call(value) === "[object Number]";
};
