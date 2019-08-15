var indexOf = Array.prototype.indexOf;

//
function _contains(arr, value) {
    if (!Array.isArray(arr)) {
        return false;
    }

    return indexOf.call(arr, value) > -1;
}

function _filter(array, fn) {
    array = array || [];
    var result = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var item = array[i];
        if (fn(item)) {
            result.push(item);
        }
    }
    return result;
}


/**
 * Flattens `array` a single level deep.
 *
 * @param {Array} arr The array to inspect.
 * @param {Array} values The values to exclude.
 * @return {Array} Returns the new array of filtered values.
 * @example
 * difference([2, 1], [2, 3]);  // => [1]
 */
function difference(arr, values = []) {
    return _filter(arr, value => !_contains(values, value));
}
