// 深拷贝
function deepCopy(obj) {
    var result;
    if (typeof obj === 'object') {
        result = obj.constructor === Array ? [] : {};

        for (var i in obj) {
            result[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
        }
    } else {
        result = obj;
    }

    return result;
}


/**
 *  Deep copy the given object considering circular structure.
 *  This function caches all nested objects and its copies.
 *  if it detects circular structure, use cached copy to avoid infinite loop.
 * @param obj
 * @param cache
 * @returns {Array|ClipboardEvent|Array|*}
 */
function deepCopy2(obj, cache = []) {

    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    function find(list, f) {
        return list.filter(f)[0];
    }

    // if obj is hit,it is in circular structure
    const hit = find(cache, c => c.original === obj);
    if (hit) {
        return hit.copy;
    }

    const copy = Array.isArray(obj) ? [] : {};
    // push the copy into cache at first,
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy
    });

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy2(obj[key], cache);
    });

    return copy;
}
