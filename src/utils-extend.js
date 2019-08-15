/*
* author: wancheng
* date: 2018-12-27
* desc:
*/



//
function extend2(to, _from, context) {
    forEach(_from, function assignValue(value, key) {
        if (context && typeof value === "function") {
            to[key] = bind(value, context);
        } else {
            to[key] = value;
        }
    });

    return to;
}



