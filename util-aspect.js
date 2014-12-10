/**
 *  javascript 端切面的实现 - 依赖于 Event 方法
 * Author: Administrator
 * Data: 14-12-10
 */

var org = {};

org.util = {};

org.util.Aspect = function () {

}

/*
 *
 * 在 object[methodName] 方法执行前，先执行 callback 函数。
 *
 *
 * callback 函数在执行时，接收的参数与传给 object[methodName] 参数相同。
 * 如果传入了 context 参数，则 callback 里的 this 指向 context。
 *
 * PS： 可以通过在callback中return false来阻止原函数的执行
 * */
org.util.Aspect.prototype.before = function (methodName, callback, context) {
    // 上下文变成了this对象，传递参数 before，methodName, callback, context
    return weave.call(this, "before", methodName, callback, context);
}

/*
 * 在 object[methodName] 方法执行后，再执行 callback 函数
 * callback 函数在执行时，接收的参数是 object[methodName]
 * 执行完成后的返回值以及传给 object[methodName] 的参数。
 * 如果传入了 context 参数，则 callback 里的 this 指向 context。
 * */

org.util.Aspect.prototype.after = function (methodName, callback, context) {
    // 上下文变成了this对象，传递参数 after，methodName,callback,context
    return weave.call(this, "after", methodName, callback, context);
}

// 匹配一个或者多个空格
var eventSplitter = /\s+/;

/**
 *
 * */
function weave(when, methodName, callback, context) {
    var names = methodName.split(eventSplitter);
    var name, method;

    while (name = names.shift()) {
        // 很好的利用了this对象（被调用放）
        method = getMethod(this, name);
        if (!method.__isAspected) {
            // 很好的利用了this对象（被调用放）
            wrap.call(this, name);
        }

        this.on(when + ":" + name, callback, context);
    }
    return this;
}

function getMethod(host, methodName) {
    var method = host[methodName];
    if (!method) {
        throw new Error("Invalid method name: " + methodName);
    }
    return method;
}

function wrap(methodName) {
    // 很好的利用了this对象
    var old = this[methodName];
    this[methodName] = function () {
        var args = Array.prototype.slice.call(arguments);
        var beforeArgs = ["before:" + methodName].concat(args);
        // prevent if trigger return false;
        // 执行 before方法
        if (this.trigger.apply(this, beforeArgs) === false) return;
        // 执行当前方法
        var ret = old.apply(this, arguments);
        var afterArgs = ["after:" + methodName, ret].concat(args);
        // 执行 after方法
        this.trigger.apply(this, afterArgs);
        return ret;
    }

    this[methodName].__isAspected = true;
}


// mix 'aspect' to object instance of Class function
org.util.Aspect.mixTo = function (receiver) {
    receiver = receiver.prototype || receiver;
    // 原型
    var proto = org.util.Aspect.prototype;
    // 遍历 属性
    for (var p in proto) {
        // 判断是否是自己的属性还是原型链上面继承过来的属性
        if (proto.hasOwnProperty(p)) {
            receiver[p] = proto[p];
        }
    }
}
