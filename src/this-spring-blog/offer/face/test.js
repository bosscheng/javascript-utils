/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-22 16:04:28
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-04-08 22:44:28
*/


// function handleCB(i) {
//     const res = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve();
//         }, 0);
//     });
//     // console.log(i);
//     res.then((res) => {
//         console.log(i);
//     })
// }

// var i = 0;
// while(i < 10) {
//     i += 1;
//     handleCB(i);
// }

// for (let i = 0; i < 10; i += 1) {
//     setTimeout(() => {
//         console.log(i);
//     }, 0);
// }

function A() {
}

A.prototype.n = 0;

A.prototype.add = function () {
  console.log(this.n);
  this.n += 1;
}

a = new A();
b = new A();
a.add();
console.log(b.add())