/*
* author: wancheng
* date: 2018-12-27
* desc:
*/


/**
 * by vue.js
 * @param obj
 * @param key
 * @param val
 * @param enumerable
 */
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true
    })
}
