/*
* date: 2019-08-29
* desc:
*/
/*
 * 全部替换
 * */
var replaceAll = function (prestr, str1, str2) {
    // 调用replace 方法实现的
    return prestr.replace(new RegExp(str1, 'gm'), str2);
};
