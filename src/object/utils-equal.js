/*
* author: wancheng
* date: 2018-12-27
* desc:
*/


/*
 * 检查两个对象是否相等，通过将对象变成string 进行比较
 *
 * */

const isObject = function (value) {
    /**
     * isObject({}) => true
     * isObject([1, 2, 3]) => true
     * isObject(Function) => true
     * isObject(null) => false
     */
    const type = typeof value;
    return value !== null && type === 'object' || type === 'function';
};

function looseEqual(a, b) {
    return a === b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
}
