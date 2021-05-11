/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-10-27 22:29:54
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-10-27 23:03:31
 */
var firstUniqChar = function(s) {
    const map = new Map();
    for (let i = 0, len = s.length; i < len; i += 1) {
        const item = map.get(s[i]);
        if (item) {
            map.set(s[i], -1)
        } else {
            map.set(s[i], i + 1);
        }
    }
    console.log(map);
    let index = s.length + 1;
    map.forEach((value, key) => {
        if (value != -1 && value < index) {
            index = value;
        }
    });
    return index == s.length + 1 ? -1 : index - 1;
};

const test = "cc";
console.log(firstUniqChar(test));