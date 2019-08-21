/*
* date: 2019-07-28
* desc:
*/
function new2(fun) {
    return function () {
        // 创建一个新对象且将其隐式原型指向构造函数原型
        let obj = {
            __proto__: fun.prototype
        };

        // 执行构造函数
        fun.call(obj, ...arguments);
        // 返回该对象
        return obj
    }
}
