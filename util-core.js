/**
 * util core
 * Author: Administrator
 * Data: 14-12-10
 */



/*
*
* */
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
}


/*
* 创建一个使用原对象作为其原型的新对象。
* */
Object.create = function(o){
    var F = function(){};
    F.prototype = o;
    return new F();
}