/*
* date: 2019-08-21
* desc:
*/
/**
 * @doc function
 * @name var isObject
 *
 * @desction
 * 定义一个参数是否是object类型的，不等同于javascript中的 typeof
 * 对于 ‘null’ 不是对象
 *
 *
 * @param {*} value Reference to check
 *
 * @return {boolean} 如果 参数是 object 但不是 null 的话，返回true 否则返回false
 *
 * */
var isObject = function (value) {
    return value === Object(value);
};


/**
 * isObject({}) => true
 * isObject([1, 2, 3]) => true
 * isObject(Function) => true
 * isObject(null) => false
 */
var isObject2 = function (value) {
    let type = typeof value;

    return value !== null && (type === 'object' || type === 'function');
};
