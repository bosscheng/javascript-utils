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
function extend2(to, from, context) {
    forEach(from, function assignValue(value, key) {
        if (context && typeof value === "function") {
            to[key] = bind(value, context);
        } else {
            to[key] = value;
        }
    });

    return to;
}

function extend3(to) {
    // 获取从第二个参数开始后面的参数。
    var objs = [].slice.call(arguments, 1);
    var tempObj = {};
    //
    for (var i = 0, len = objs.length; i < len; i++) {
        tempObj = objs[i];
        for (var prop in tempObj) {
            to[prop] = tempObj[prop];
        }
    }

    return to;
}
