/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-10-30 01:16:46
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-10-30 01:18:02
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let flag = true;
    const stack = s.toLocaleLowerCase().replace(/[^a-z]/g,'');
    for (let i = 0, j = stack.length - 1; i < j; i += 1, j -= 1) {
        if (stack[i] !== stack[j]) {
            flag = false;
            break;
        }
    }
    return flag;
};

const test = "0P";
console.log(isPalindrome(test));