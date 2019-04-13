/*
* author: wancheng
* date: 2018-12-27
* desc:
*/


function extend(to, from) {

    var keys = Object.keys(from);

    var i = keys.length;

    while (i--) {
        to[keys[i]] = from[keys[i]];
    }

    return to;
}


//
function extend2(a, b, context) {
    forEach(b, function assignValue(value, key) {
        if (thisArg && typeof value === "function") {
            a[key] = bind(value, context);
        } else {
            a[key] = value;
        }
    });

    return a;
}
