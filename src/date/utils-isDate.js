/*
* date: 2019-08-21
* desc:
*/
/**
 * @doc function
 * @name var isDate
 * @function
 *
 * @description
 *  判断参数是否是date 类型
 *
 * @param {*} 参数
 * @return {boolean} 如果参数是 date 类型的话 返回true，否则返回false
 *
 * */
var isDate = function (value) {
    var toString = Object.prototype.toString;
    return toString.call(value) === "[object Date]";
};
