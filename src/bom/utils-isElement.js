/*
* date: 2019-08-21
* desc:
*/
/*
 * 原生态的校验方式
 * */
var isElement = function (value) {
    return !!(value && value.nodeType === 1);
};

/**
 * @doc function
 * @name var isElement
 *
 * @function
 *
 * @description
 *  判断参数是否是 element （原生态的，或者被jquery 包装过的。）
 *
 * @param {*} 参数
 * @return {boolean} 如果参数是 element 类型的话 返回 true 否则返回false
 *
 * */
var isElement2 = function (value) {
    // 对于 nodeName 是原生态的方法
    // 对于 方法 on  和 find　是 jquery 所拥有的
    return (value && (value.nodeName || (node.on && node.find)));
};
