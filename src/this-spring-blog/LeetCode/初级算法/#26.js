/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-09-21 23:58:29
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-09-22 00:00:53
 */
// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
// 解法一
// var removeDuplicates = function(nums) {
//   const map = new Map();
//   for (let i = 0, len = nums.length; i < len; i += 1) {
//     const item = nums.shift();
//     if (map.get(item)) {
//       continue;
//     } else {
//       map.set(item, true);
//       nums.push(item);
//     }
//   }
//   return nums.length;
// };

// 解法二
// var removeDuplicates = function(nums) {
//   for (let i = 0, len = nums.length; i < len; i += 1) {
//     const item = nums.shift();
//     if (item !== nums[nums.length - 1]) {
//       nums.push(item);
//     }
//   }
//   return nums.length;
// };

// 解法三
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1, len = nums.length; j < len; j += 1) {
      if (nums[i] !== nums[j]) {
        i += 1;
        nums[i] = nums[j];
      }
    }
    return i + 1;
  }