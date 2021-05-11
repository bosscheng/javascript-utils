/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-29 16:00:43
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-10 13:25:44
 */
// /*
//  * @Author: xiuquanxu
//  * @Company: kaochong
//  * @Date: 2020-12-29 16:00:43
//  * @LastEditors: xiuquanxu
//  * @LastEditTime: 2021-01-10 13:20:33
// */
// function MyNew(F, ...arg) {
//     const obj = new Object();
//     F.apply(obj, arg);
//     obj.__proto__ = F.prototype;
//     return obj;
// }

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayHello = function() {
//     console.log(this.name);
// }

// const x = MyNew(Person, 'xxq', '21');
// console.log(x.sayHello());

function MyNew(fn, ...arg) {
    // let obj = new Object();
    let obj = Object.create({});
    fn.apply(obj, arg);
    obj.__proto__ = fn.prototype;
    return obj;
}

function person(name) {
    this.name = name;
}

person.prototype.sayHello = function() {
    console.log(this.name);
}

const p = new MyNew(person, 'xxq');
p.sayHello();