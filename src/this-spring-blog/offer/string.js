/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-24 01:18:16
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-25 14:12:05
*/
// String常用Api  
// 1. charAt(index)
var x = '1234';
console.log(x.charAt(0)); // 1

// 2. split(str, limit); // 返回一个按照str分隔的数组
console.log(x.split('')); // ['1', '2', '3', '4']
console.log(x.split('', 1)); // [ '1' ]
console.log(x.split('2')); // [ '1', '34' ]
console.log(x.split('2', 1)); // ['1']

// 3. splice(beginIndex, endIndex); // 左开右闭
console.log(x.slice(1, 3)); // 34

// 4. replace(subString|regexp, subString|Function);(原字符串不动，替换成新字符串) // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// 1.普通替换字符串  
console.log(x.replace('23', '00'));

// 2. 第一个参数是正则表达式(i代表不区分大小写，g代表全局匹配) 
console.log(x.replace(/23/ig, "00"));

// 3. 第二个参数是函数(p1和p2代表第几个括号匹配到的字符串)
console.log(x.replace(/(23)|(4)/ig, function(match, p1, p2, offset, originString) {
    console.log(match, p1, p2, offset, originString);
    return parseInt(match, 10) + 1;
}));

// eg 将: HelloWorld替换成hello_world
function Rename(str) {
    let cout = 0;
    const newRes = str.replace(/[A-Z]/g, function(match) {
        cout += 1;
        if (cout == 1) {
            return match.toLowerCase();
        }
        return `_${match.toLowerCase()}`;
    });
    return newRes;
}
console.log(Rename('HelloWorld'));

// 字符串转数组  
var test = '123';
var arr1 = test.split('');
var arr2 = Array.from(test);
var arr3 = [...test];
console.log(arr1, arr2, arr3);
// 数组转字符串
var str1 = arr1.join('');
console.log(str1);