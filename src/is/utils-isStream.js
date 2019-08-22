/*
* date: 2019-08-21
* desc:
*/

var isStream = function (value) {
    return isObject(value) && isFunction(value.pipe);
};
