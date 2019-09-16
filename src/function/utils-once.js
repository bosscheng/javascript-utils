/*
* date: 2019-08-31
* desc:
*/
// once
var once = function (fn, context) {
    var result;

    return function () {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
};


var once2 = function (fn) {
    let called = false;
    return function () {
        if (!called) {
            called = true;
            fn.apply(this, arguments);
        }
    }
};
