/*
* author: wancheng
* date: 2018-12-27
* desc:
*/




/*
 * 检查两个对象是否相等，通过将对象变成string 进行比较
 *
 * */
function looseEqual(a, b) {
    return a === b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
}
