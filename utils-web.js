/**
 * 二蛋，记得添加备注啊
 * Author: Administrator
 * Data: 14-12-18
 */

// 临时占坑
// extend 函数 
function extend(subClass,superClass){
    // 定义一个空的function ，并将用它创建一个空函数F，并将用它创建的一个对象实例插入到原型链中。
    // 优点：可以避免创建超类的实例，因为他可能比较庞大，而且有的时候超类的构造函数有一些副作用，或者会执行一些需要进行大量
    // 计算的任务。
    var F = function(){}; 
    F.prototype = superClass.prototype;
    subClass.prototype = new F();
    subClass.prototype.constructor = subClass;
    // 提供了superclass属性
    // 有了superclass属性之后，就可以直接调用超类中的方法了。
    subClass.superclass = superClass.protptype;
    if(superClass.prototype.constructor === Object.prototype.constructor){
        superClass.prototype.constructor = superClass;
    }
}

// clone 函数
function clone(object){
    // 创建一个新的空函数F
    function F(){};
    //prototype属性就是作用于指向原型对象的，通过原型链机制，它提供了到所有继承而来的成员的链接。
    F.prototype = object;
    // 创建一个新的对象（返回的这个克隆结果是一个以给定对象为原型对象的空对象）
    return new F();
}


