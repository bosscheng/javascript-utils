/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-10-27 13:13:30
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-10-27 13:24:01
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x.toString();
    if (x[0] == '-') {
        for (let i = 1; i < (x.length - 1) / 2; i += 1) {
            const temp = x[i];
            x[i] = x[x.length - i - 2];
            x[x.length - i - 2] = temp;
        }
    } else {
        console.log(x.length / 2);
        for (let i = 0; i < x.length / 2; i += 1) {
            console.log(i, x[i], x[x.length - i - 1]);
            const temp = x[i];
            x[i] = x[x.length - i - 1];
            x[x.length - i - 1] = temp;
            console.log(x);
        }
    }
    return parseInt(x);
};

const test = 123;
console.log(reverse(123));