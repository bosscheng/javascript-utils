/*
* date: 2019-08-31
* desc:
*/
/*
    驼峰转下划线
*/
var camelToUnderscore = function (str) {
    return str.replace(/([A-Z])/g, function ($0, $1) {
        return '_' + $1.toLowerCase();
    });
};
