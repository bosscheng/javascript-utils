/*
* date: 2019-08-21
* desc:
*/

/*
 * 判断属性值 a 和 b 是否相等，
 * ps: 仅仅适用于属性值的判断，非普通的 === 或者 == 判断
 * */
var isEqual = function (a, b) {
    if (a === b) {
        return true;
    }
    // 都是为空的 参数
    if (isEmptyAttrValue(a) && isEmptyAttrValue(b)) {
        return true;
    }
    // 如果两者的类型不匹配的话
    var className = toString.call(a);

    if (className !== toString.call(b)) {
        return false;
    }
    // 类的名称
    switch (className) {
        // Strings ,numbers, dates, and booleans
        case "[object String]":
            // 对象包装方式 new String("") 和原始方式 a是等价的
            return a == String(b);
        case "[object Number]":
            // "NaN" 是相等的。
            if (a != +a) {
                return b != +b;
            } else {
                if (a == 0) {
                    return 1 / a == 1 / b;
                } else {
                    return a == +b;
                }
            }
        case "[object Date]":
        case "[object Boolean]":
            //
            return +a == +b;
        case "[object RegExp]":
            // 通过比较RegExp的对象属性来判断是否相等
            // 正则表达式源文件
            var source = a.source == b.source;
            // RegExp 是否标志 g
            var global = a.global == b.global;
            // RegExp 是否标志 m
            var multiline = a.multiline == b.multiline;
            // RegExp 是否标志 i
            var ignoreCase = a.ignoreCase == b.ignoreCase;
            return source && global && multiline && ignoreCase;

        // 简单判断数组包含的primitive 值是否相等
        case "[object Array]":
            var aString = a.toString();
            var bString = b.toString();
            // 只要包含非primitive 值，为了稳妥起见，都返回false；
            return aString.indexOf("[object") === -1 && bString.indexOf("[object") === -1 && aString === bString;
    }

    if (typeof a !== "object" || typeof b !== "object") {
        return false;
    }
    //


    // 其他情况都返回false，以避免误判导致change 事件没有发生。
    return false;
};
