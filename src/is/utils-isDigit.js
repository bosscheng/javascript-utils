/*
* date: 2019-08-21
* desc:
*/
/*
 * 是否为数字类型
 * */
var isDigit = function (value) {
    var pattern = /^[0-9]*$/;
    if (pattern.exec(value) === null || value === "") {
        return false;
    } else {
        return true;
    }
};
