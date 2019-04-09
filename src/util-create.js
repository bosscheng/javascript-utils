/**
 * util core
 * Author: Administrator
 * Data: 14-12-10
 */


/*
 * 创建一个使用原对象作为其原型的新对象。
 * */

var create = Object.create || function (o) {
    var F = function () {
    };
    F.prototype = o;
    return new F();
};

