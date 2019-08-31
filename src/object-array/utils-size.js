/*
* date: 2019-08-31
* desc:
*/

/**
 * @doc function
 * @name var size
 * @function
 *
 * @description
 *      计算array 中的元素的 个数，或者对象所拥有的属性，或者字符串的长度
 *
 * @param {Object | Array | string}  obj object ,array or string to inspect
 * @param {boolean} [ownPropsOnly = false] count only 'own' properties in an object
 * @return {number} the size of 'obj' or '0' if 'obj' is neither an object nor an array;
 *
 * */

var size = function (obj, ownPropsOnly) {
    var count = 0, key;

    if (Array.isArray(obj) || typeof obj === "string") {
        return obj.length;
    } else if (typeof obj === 'object' && obj !== null) {
        for (key in obj) {
            if (!ownPropsOnly || obj.hasOwnProperty(key)) {
                count++;
            }
        }
    }
    return count;
};
