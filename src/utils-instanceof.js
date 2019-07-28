/*
* date: 2019-07-28
* desc:
*/

// 思路：右边变量的原型存在于左边变量的原型链上
function instanceof2(left, right) {
    let leftValue = left.__proto__;
    let rightValue = right.prototype;
    while (true) {
        if (leftValue === null) {
            return false
        }
        if (leftValue === rightValue) {
            return true
        }
        //  一直比较下去。
        leftValue = leftValue.__proto__;
    }
}
