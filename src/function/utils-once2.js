/*
* date: 2019-08-31
* desc:
*/

var once2 = function (fn) {
    let called = false;
    return function () {
        if (!called) {
            called = true;
            fn.apply(this, arguments);
        }
    }
};
