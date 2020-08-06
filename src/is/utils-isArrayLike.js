/**
 * Date:2020/8/6
 * Desc:
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
