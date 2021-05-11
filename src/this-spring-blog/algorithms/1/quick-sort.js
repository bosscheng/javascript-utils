/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-23 01:02:54
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-03-24 19:40:39
 */
// 递归实现
function QuickSort(arr) {
  console.log(arr.length);
  if (arr.length <= 1) return arr;
  const flag = arr[0], left = [], right = [];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] >= flag) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  return QuickSort(left).concat(flag, QuickSort(right))
}
// const test = [4,3,1,5,7,9,6];
// console.log(QuickSort(test));



function swap(items, firstIndex, secondIndex){
  var temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  var pivot   = items[Math.floor((right + left) / 2)],
      i       = left,
      j       = right;
  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(items, i, j);
          i++;
          j--;
      }
  }
  return i;
}

const test_1 = [4,3,1,5,7,9,6];
console.log(partition(test_1, 0, test_1.length - 1));
