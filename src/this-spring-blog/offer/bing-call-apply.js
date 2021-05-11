/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-23 18:11:54
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-23 19:10:42
*/
// apply、call、bind  
// 1. call：第一个参数是函数运行时指向的this，后面的参数是传递个调用方法的(call(this, p1, p2, p3))
// 2. apply: 第一个参数是函数运行指向的this，后面的参数只有一个数组是传递给调用方法(apply(this,[p1, p2, p3...]))
// 3. bind: 第一个参数是函数运行执向的this,后面参数同call。但是他返回的是一个永久改变this指向的函数。
// 但是在应用的时候无论call是一个一个值传还是apply传一个数组最后在函数里面相应时候都是一个一个的。
// 当apply和call第一个参数传递null或者undefined时候this指向window

function Super() {
    this.name = 'xxq';
}

Super.prototype.say = function(arg) {
    console.log(this.name, arg);
}

function Sub() {
    this.name = 'yyx';
}

Sub.prototype.say = function(arg) {
    console.log(this.name, arg);
}

const t = new Sub();
t.say(); // yyx
t.say.call(new Super(), 1, 2, 3); // xxq 改变this执行到Super
t.say.apply(new Super(), [1,2,3]); // xxq 

// 例题利用Math求最大值  
const arr = [1,2,3,4]
Math.max.apply(null, arr);

// 1. 三者都可以改变函数的this对象指向。
// 2. 三者第一个参数都是this要指向的对象，如果如果没有这个参数或参数为undefined或null，则默认指向全局window。
// 3. 三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入。
// 4. bind 是返回绑定this之后的函数，便于稍后调用；apply 、call 则是立即执行 。

// 继承  

function Person(sex) {
    this.sex = sex;
}

Person.prototype.printSex = function() {
    console.log('Human printSex', this.sex);
}

function Man(sex) {
    Person.call(this, sex);
}

Man.prototype.run = function() {
    console.log('man run', this.sex);
}

const tman = new Man('body');
Man.prototype.__proto__ = Person.prototype;
tman.printSex();
tman.run();