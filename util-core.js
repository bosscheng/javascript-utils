/**
 * util core
 * Author: Administrator
 * Data: 14-12-10
 */



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
}


/*
 * 创建一个使用原对象作为其原型的新对象。
 * */
Object.create = function (o) {
    var F = function () {
    };
    F.prototype = o;
    return new F();
}

var _cid = 0;

function cid() {
    return _cid++;
}
