/*
* date: 2019-08-21
* desc:
*/
// 借鉴 jquery的实现。
var isWindow = function (value) {
    return value && typeof value === "object" && "setInterval" in value;
};


/**
 * @doc  function
 * @name var isWindowByNg
 * @function
 *
 * @description
 *  判断参数是否是 window 类型
 * @param {*} 参数
 *
 * @return {boolean} 如果参数是 window对象的话 返回true 否则返回false
 *
 * */
var isWindow2 = function (value) {
    return value && value.document && value.location && value.alert && value.setInterval;
};

// 借鉴 jquery的实现
var isWindow3 = function (value) {
    return value !== null && value === value.window;
};

