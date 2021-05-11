/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-26 13:04:27
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-26 14:09:09
*/
// 由于js无法实现多继承，所以使用mixin的方式来实现假的继承（mixin）
// 根据维基百科的定义，mixin 是一个包含可被其他类使用而无需继承的方法的类。
function mixin(parent) {
    return function(...arg) {
        for (let v of arg) {
            console.log(v);
            for (let vv of Object.getOwnPropertyNames(v.prototype)) {
                if (vv !== 'constructor') Object.defineProperty(parent.prototype, vv, v.prototype[vv]);
            }
        }
    }
}
class C {}

class A {
    constructor() {

    }
    printA() {
        console.log('A');
    }
}

class B {
    printB() {
        console.log('B');
    }
}

mixin(C)(A, B)
const c = new C();
console.log(Object.getOwnPropertyNames(c.__proto__));
