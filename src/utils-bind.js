/*
* author: wancheng
* date: 2019-04-13
* desc:
*/
function bind(fn, context) {
    return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0, len = args.length; i < len; i++) {
            args[i] = arguments[i];
        }
        return fn.apply(context, args);
    }
}


// 思路：类似call，但返回的是函数
Function.prototype.bind2 = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    let _this = this
    // arg
    let arg = [...arguments].slice(1)
    return function F() {
        // 处理函数使用new的情况
        if (this instanceof F) {
            return new _this(...arg, ...arguments)
        } else {
            return _this.apply(context, arg.concat(...arguments))
        }
    }
}

