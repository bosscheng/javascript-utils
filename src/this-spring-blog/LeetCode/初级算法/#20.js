/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-11-09 13:10:35
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-11-09 13:21:31
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for (let i = 0, len = s.length; i < len ; i += 1) {
        const item = s[i];
        const compare = stack.pop();
        console.log(item, compare);
        if ((item === ')' && compare === '(') || (item === ']' && compare === '[') || (item === '}' && compare === '{')) {
            
        } else {
            stack.push(compare);
            stack.push(item);
        }
    }
    console.log(stack.length, stack);
    return !stack.length;
};
const test = "{[]}"

console.log(isValid(test));