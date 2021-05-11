/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-26 14:25:27
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-26 15:42:08
 */
// for key in
// for value of
// Object.getOwnPropertyNames
// Ojbect.getOwnPropertySymbols
Object.prototype.oa = 'oa';
function SelfObject(ca,cb) {
    this.ca = ca;
    this.cb = cb;
}
SelfObject.prototype.pa = 'pa';
SelfObject.prototype.pb = 'pb';
var x = new SelfObject('ca', 'cb');
x.sa = 'sa';
x.sb = 'sb';
// x[Symbol.iterator] = [][Symbol.iterator].bind([]);
// 1. for key in
for (let key in x) {
    console.log(key);
}
// ca
// cb
// sa
// sb
// pa
// pb
// oa

var arr = [1,2,3];
arr.name = 'name';
Array.prototype.age = 'age';
// 2. for value of
for (let value of arr) {
    console.log(value);
}

// 3. Object.getOwnPropertyNames
console.log(' ', Object.getOwnPropertyNames(x)); 
// [ 'ca', 'cb', 'sa', 'sb' ]

// Object.defineProperty()
// hasOwnProperty