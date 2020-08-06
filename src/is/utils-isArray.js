/**
 * Date:2020/8/6
 * Desc:
 */

function isArray(arr) {
    return Array.isArray ? Array.isArray(arr) : Object.prototype.toString.call(arr) === '[object Array]';
}
