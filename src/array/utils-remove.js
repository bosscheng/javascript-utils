/*
* date: 2019-08-31
* desc:
*/

function _pullAt(arr, indexes) {
    if (!Array.isArray(arr)) {
        return [];
    }

    let length = arr ? arr.length : 0;
    const last = length - 1;
    while (length--) {
        let previous;
        const index = indexes[length];
        if (length === last || index !== previous) {
            previous = index;
            arr.splice(index, 1);
        }
    }

    return arr;
}

/**
 * const arr = [1, 2, 3, 4]
 * const evens = remove(arr, n => n % 2 == 0)
 * console.log(arr) // => [1, 3]
 * console.log(evens) // => [2, 4]
 */
function remove$2(arr, predicate) {

    const result = [];

    if (!Array.isArray(arr)) {
        return result;
    }
    let i = -1;
    const indexes = [];
    const length = arr.length;

    while (++i < length) {
        const val = arr[i];
        if (predicate(val, i, arr)) {
            result.push(val);
            indexes.push(i);
        }
    }
    _pullAt(arr, indexes);

    return result;
}

// 删除 item
function remove$3(arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
}
