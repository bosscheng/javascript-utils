/*
* author: wancheng
* date: 2018-12-26
* desc:
*/

var shallowProperty = function (key) {
    return function (obj) {
        return obj == null ? void 0 : obj[key];
    };
};

var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

var getLength = shallowProperty('length');

var isArrayLike = function (collection) {
    var length = getLength(collection);
    return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};

/**
 * underscore flatten method
 * @param input
 * @param [shallow]
 * @returns {*}
 */
var flatten = function (input, shallow, strict, output) {

    output = output || [];

    var idx = output.length;

    for (var i = 0, length = getLength(input); i < length; i++) {
        var value = input[i];
        if (isArrayLike(value) && Array.isArray(value)) {
            // Flatten current level of array or arguments object.
            if (shallow) {
                var j = 0;
                var len = value.length;
                while (j < len) output[idx++] = value[j++];
            } else {
                flatten(value, shallow, strict, output);
                idx = output.length;
            }
        } else if (!strict) {
            output[idx++] = value;
        }
    }
    return output;
};


