/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(arr, fn) {
    if (!Array.isArray(arr)) {
        return undefined;
    }
    let max = arr[0];
    let maxData;
    if (typeof fn === 'function') {
        maxData = fn(max);
    } else {
        maxData = arr[0][fn];
    }

    let data;

    arr.forEach((val) => {
        if (typeof fn === 'function') {
            data = fn(val);
        } else {
            data = val[fn];
        }

        if (data > maxData) {
            max = val;
            maxData = data;
        }
    });

    return max;
}
