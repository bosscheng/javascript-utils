/*
* date: 2019-07-28
* desc:
*/

// // 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.call2 = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('not funciton')
    }

    context = context || window;

    context.fn = this;
    let arg = [...arguments].slice(1);
    let result = context.fn(...arg);
    delete context.fn;
    return result
};


