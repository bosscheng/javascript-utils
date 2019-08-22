/*
* date: 2019-08-21
* desc:
*/


/**
 * @doc function
 * @name var isFile
 * @function
 *
 * @description
 *  判断参数是否是 file 类型
 * @param {*} 参数
 *
 * @return {boolean} 如果参数是 file 类型的话，返回true 否则返回false
 * */
var isFile = function (value) {
    var toString = Object.prototype.toString;
    return toString.call(value) === '[object File]';
};
