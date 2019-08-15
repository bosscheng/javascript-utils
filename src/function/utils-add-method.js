/*
 * 在原型链上添加方法 method 用于创建方法的
 * */
Function.prototype.method = function (name, func) {
    // 符合条件的时候才会增加
    if (!this.prototype[name]) {
        // 很好的利用了this对象
        this.prototype[name] = func;
    }

    return this;
};
