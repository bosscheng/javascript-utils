/*
* date: 2019-08-21
* desc:
*/
/**
 * isNil(null) => true
 * isNil() => true
 * 是 undefined 或者是 null
 */
var isNil = function (value) {
    return value === null || value === undefined;
};
