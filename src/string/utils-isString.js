/*
* date: 2019-08-21
* desc:
*/
var toString = Object.prototype.toString;

/**
 *
 * */
var isString = function (value) {
    return toString.call(value) === '[object String]';
};



/**
 * @doc function
 * @name var isStringByNg
 * @function
 *
 * @description
 *  判断参数是否是 string 类型
 *
 * @param {*} 参数
 * @return {boolean} 如果参数是 string类型的话，返回true ，否则返回false
 *
 * */
var isString2= function (value) {
    return typeof value === "string";
};
