/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-29 11:46:31
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-10 13:29:10
*/
function MyInstance(left, right) {
    while(left) {
        if (left.__proto__ === right.prototype) {
            return true;
        } else {
            left = left.__proto__;
        }
    }
    return false;
}

function Test() {

}

console.log(MyInstance(p, Function), p instanceof Function);
console.log(MyInstance(p, Object), p instanceof Object);
console.log(MyInstance(Function, Test), Function instanceof Test);

// function MyInstance(left, right) {
//     while(left) {
//         if (let.__proto__ === right.prototype) {
//             return true;
//         }
//         left = left.__proto__;
//     }
//     return false;
// }