/*
* date: 2019-08-21
* desc:
*/
var isURLSearchParams = function (value) {
    return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
};
