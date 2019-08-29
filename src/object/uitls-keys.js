/*
* date: 2019-08-29
* desc:
*/

/**
 * keys
 *      优先考虑高级浏览器支持的方法，当不支持的时候，利用var p in o 结合 hasOwnProperty()方法
 * */
var keys = Object.keys || function (o) {
    var ret = [];
    // 利用 in 方式
    for (var p in o) {
        // 通过 hasOwnProperty 方法。
        if (o.hasOwnProperty(p)) {
            ret.push(p);
        }
    }
    return ret;
};
