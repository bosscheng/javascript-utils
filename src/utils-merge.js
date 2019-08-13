/*
* author: wancheng
* date: 2019-04-13
* desc:
*/

/**
 * @param {Object} merge object
 *
 * @result {Object} result
 */
function merge() {
    var result = {};

    function assignValue(value, key) {
        //
        if (typeof result[key] === 'object' && typeof value === 'object') {
            result[key] = merge(result[key], value);
        } else {
            result[key] = value;
        }
    }

    //
    for (var i = 0, len = arguments.length; i < len; i++) {
        forEach(arguments[i], assignValue);
    }

    return result;
}


function merge2(dataArray) {
    let result = [];

    dataArray.forEach((item) => {
        result = result.concat(item);
    });

    return result;
}
