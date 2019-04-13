/*
* author: wancheng
* date: 2019-04-13
* desc:
*/

/**
 *
 */
function deepMerge() {
    var result = {};

    //
    function assignValue(val, key) {
        //
        if (typeof result[key] === 'object' && typeof val === 'object') {
            //
            result[key] = deepMerge(result[key], val);
        } else if (typeof val === 'object') {
            // deepMerge
            result[key] = deepMerge({}, val);
        } else {
            result[key] = val;
        }
    }

    //
    for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
    }
    return result;
}
