/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-10-27 00:58:14
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-10-27 00:58:57
 */
var reverseString = function(s) {
    const len = s.length / 2;
    // const tlen = s.length;
    for (let i = 0; i < len; i += 1 ) {
        const temp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = temp;
    }
    console.log(len);
};
var test = [1,2,3,4,5];
reverseString(test);
console.log(test);