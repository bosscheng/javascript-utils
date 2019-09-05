/*
* date: 2019-08-21
* desc:
*/

var _isFunction = function (value) {
    return typeof value === 'function';
};

var _isObject = function (value) {
    return typeof value === 'object' && value !== null;
};

var isStream = function (value) {
    return _isObject(value) && _isFunction(value.pipe);
};
