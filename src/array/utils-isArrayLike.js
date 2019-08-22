/*
* date: 2019-08-21
* desc:
*/
var isArrayLike = function (value) {
    if (value === null || isWindow(value)) {
        return false;
    }

    var length = value.length;

    if (value.nodeType === 1 && length) {
        return true;
    }

    return isString(value) || isArray(value) || length === 0 || typeof length === "number" && length > 0 && (length - 1) in value;
};

var isArrayLike2 = function (value) {
    return value !== null && typeof value !== "function" && isFinite(value.length);
};
