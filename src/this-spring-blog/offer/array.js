/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-25 14:12:25
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-25 19:21:55
*/
// 介绍数组操作Array  

// 1. push, pop, shift, unshift, concat, join


// 2. Array.from(likeArray[, fn, thisArg])  fn指定后则likeArray中每个数组都会执行fn函数，thisArg执行后会改变this指针指向
// likeArray可以是：String,Set,Map, arguments
var str = '123';
var res = Array.from(str, (item) => item * 2);
console.log(res);

// eg: 利用Set和Array对数组去重  
var arr1 = [1,2,3,4,5]; var arr2 = [4,5,6];
var res = new Set(arr1.concat(arr2));
console.log(res);

// 3. isArray()  Array.prototype 也是一个数组
// Polyfill
Array.isArray = function(arg) {
    return Object.toString.call(arg) === '[object Array]';
}

// 4. arr1.every(function(item, index, arr1) {return true;}[, thisArg]) every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。 // thisArg可选如果传入则function中的this执行thisArg  
var arr4 = [1,2,3,4,5,6];
var res = arr4.every(function(item, index, arr) {
    if (item > 3) return true;
    return false;
});
console.log(res); // false

// 5. fill(value, start, end) 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
var arr5 = [1, 2, 3, 4, 5, 6];
arr5.fill(0, 3, 6);
console.log(arr5);//[ 1, 2, 3, 0, 0, 0 ]

// 6. filter((value, index, arr) => {}, thisArg) // 过滤符合条件的数组并返回一个新数组  
var arr6 = [1,2,3,4,5,6];
var res = arr6.filter((item, val, arr) => {
    if (item > 3) return true;
    return false;
});
console.log(arr6, res);  // [ 1, 2, 3, 4, 5, 6 ] [ 4, 5, 6 ]

// 7.  find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
//     findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。
var arr7 = [1,2,3,4,5,6];
var res = arr7.find((item, val, arr) => {
    if (item > 3) return true;
    return false;
});
// res: 8
console.log(arr7, res); // [ 1, 2, 3, 4, 5, 6 ] 4

// 8. includes(valueToFind[, fromIndex]) 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
// eg: [1, 2, 3].includes(2);     // true

// 9. map

// 10. Reduce  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

var maxCallback = ( acc, cur ) => {
    Math.max( acc.x, cur.x );
};
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() 没有初始值
// var res = [ { x: 2 }, { x: 22 }, { x: 42 } ].reduce( maxCallback ); // NaN
console.log(res);
var res = [ { x: 2 }, { x: 22 }            ].reduce( maxCallback ); // 22
console.log(res);
// eg：求出数组所有合  
var test10 = [1,2,3,4,5];
var res = test10.map((item, index, arr) => item * 2).reduce(function (acc, cur) { return acc + cur; }, 100);
console.log(res);

// 11. arr.slice([begin[, end]]) 左闭右开

// 12. some(arr) 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
var test12 = [1,2,3,4];
var res =  test12.some((item, index, value) => {
    if (item > 3) return true;
    return false;
});
var res2 = test12.every((item) => {
    if (item > 3) return true;
    return false;
});
console.log(' test12: ', res , ' res2:', res2);

// 13. splice(start[, deleteCount[, item1[, item2[, ...]]]]) // 返回被删除的元素
// delete 
var test13 = [1,2,3,4];
var res = test13.splice(0, 2); // 从0开始
console.log(' test13: ', ' res: ', res, ' test13:', test13);
// add
var test13 = [1,2,3,4];
var addArr = test13.splice(0, 0, 'll');
console.log(addArr, test13); // [] [ 'll', 1, 2, 3, 4 ]

var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, "trumpet");
// 从第 2 位开始删除 1 个元素，插入“trumpet”
// 运算后的 myFish: ["angel", "clown", "trumpet", "sturgeon"]
// 被删除的元素: ["drum"]
