/*
* date: 2019-08-29
* desc:
*/
/*
 * 清除最外层的空格  ---- 可以参考jquery如何实现的
 *
 * */
var trim = function (str) {
    //
    var reExtraSpace = /^\s*(.*?)\s+$/;

    return str.replace(reExtraSpace, '$1');
};
