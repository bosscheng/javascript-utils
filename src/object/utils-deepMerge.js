/*
* author: wancheng
* date: 2019-04-13
* desc:
*/

/**
 * 对象的深度合并。会覆盖原 object 对象。
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
        var item = arguments[i];
        for (var key in item) {
            assignValue(item[key], key);
        }
    }
    return result;
}
