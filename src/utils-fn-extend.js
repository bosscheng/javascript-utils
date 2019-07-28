/*
* date: 2019-07-28
* desc:
*/

function extend(fn1, fn2) {
    let Super = function () {
    }
    Super.prototype = fn1.prototype;
    fn2.prototype = new Super();
}
