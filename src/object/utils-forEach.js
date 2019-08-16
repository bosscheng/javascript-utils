/*
* date: 2019-07-26
* desc:
*/

function forEach(obj, fn) {
    Object.keys(obj).forEach(key => fn(obj[key], key));
}
