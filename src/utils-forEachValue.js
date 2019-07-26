/*
* date: 2019-07-26
* desc:
*/

function forEachValue(obj, fn) {
    Object.keys(obj).forEach(key => fn(obj[key], key));
}
