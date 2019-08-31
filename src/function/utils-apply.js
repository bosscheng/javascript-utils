/*
* date: 2019-08-31
* desc:
*/
// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype._apply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('not function')
    }
    context = context || window;
    context.fn = this

    let result
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}
