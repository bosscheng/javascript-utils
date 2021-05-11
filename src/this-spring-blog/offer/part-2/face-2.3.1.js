/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-06-21 17:33:20
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-06-21 17:42:07
 */ 
const inputArr = [2,3,1,0,2,5,3];
// 时间复杂度O(n) 空间复杂度O(n)
function ArrRepeat(arr) {
    const map = new Map();
    const res = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (!map.get(arr[i])) {
            // 这里+1目的是为了防止i=0时候!map.get(arr[i])这个条件误判断
            map.set(arr[i], i + 1);
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}
// 
function ArrRepeat2(arr) {

}
const res = ArrRepeat(inputArr);
console.log(res);