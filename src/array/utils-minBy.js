/**
 * @param {Array} arr The array to iterate over.
 * @param {Function} [fn] The iteratee invoked per element.
 * @return {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(arr, fn) {
    if (!Array.isArray(arr)) {
        return undefined;
    }
    let min = arr[0];
    let minData;
    if (typeof fn === 'function') {
        minData = fn(min);
    } else {
        minData = arr[0][fn];
    }

    let data;

    arr.forEach((val) => {
        if (typeof fn === 'function') {
            data = fn(val);
        } else {
            data = val[fn];
        }

        if (data < minData) {
            min = val;
            minData = data;
        }
    });

    return min;
}
