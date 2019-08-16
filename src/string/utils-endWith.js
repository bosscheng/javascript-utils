/*
 * 判断是否以某一个字符串结束的
 * */
var endWith = function (str, s) {
    var leng = str.length - s.length;
    return (leng >= 0 && str.lastIndexOf(s) === leng);
};
