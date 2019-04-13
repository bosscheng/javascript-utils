/*
* author: wancheng
* date: 2019-04-13
* desc:
*/

/**
 *
 * @param {Object | Array } obj
 * @param {Function} fn
 */
function forEach(obj, fn) {
    if (obj === null || typeof obj === 'undefined') {
        return;
    }

    //
    if (typeof obj !== 'object') {
        obj = [obj];
    }

    // array
    if (Array.isArray(obj)) {
        for (var i = 0, len = obj.length; i < len; i++) {
            fn.call(null, obj[i], i, obj);
        }
    }

    // object
    else {
        for (var p in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, p)) {
                fn.call(null, obj[p], p, obj);
            }
        }
    }
}
