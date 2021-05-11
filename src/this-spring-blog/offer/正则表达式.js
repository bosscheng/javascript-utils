/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-24 13:19:23
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-25 14:08:05
*/

// 本人对正则表达式一窍不通，所以只学习最基本的(元字符)  
// 1. .  匹配任意一个单字符  
var test1 = '123451h'; // 1H变成6  
var res = test1.replace(/.H/ig, function(match, p1, offset, originString) {
    console.log(match, p1, offset, originString);
    return '6';
});
console.log('. :', res); // 123456

// 2. []  匹配方括号里面的任意一个字符  
var test2 = '123def456abc789'; // 把字母都消除[123456789]
var res = test2.replace(/[a-z]/ig, function(match) {
    return '';
});
console.log('[] :', res);

// 3. [^]  匹配除了方括号里面的任意字符
var test3 = '123def456abc789';
var res = test3.replace(/[^0-9]/ig, function(match) {
    return '';
});
console.log(test3, res);

// 4. *  匹配大于等于0个*号之前的字符   +  匹配大于等于1个+号之前的字符  
var test4 = '123dedede456';
var res = test4.replace(/de*/ig, function(match) {
    console.log(match);
    return '';
});
console.log(res);

// 5. ? 匹配？前字符为可选，例如t?he，匹配he和the  
// var test5 = '123the456';
var test5 = '123he456';
var res = test5.replace(/t?he/ig, function(match) {
    return '';
});
console.log(' ?:', res);

// 6. {}  是一个量词，规定了{}前面符号出现的次数，例如：[1-9]{2,9} 解释为数组1-9出现次数为2-9次
var test6 = '123qw45er6789'; // 匹配数字出现次数大于等于三次的转位0
var res = test6.replace(/[0-9]{3,}/ig, function(match) {
    return 0;
});
console.log('{}: ', res);

// 7. () 匹配与括号内完全相等的字符 (abc)完全匹配abc
// "(c|g|p)ar" => The car is parked in the garage.

// 8. | 或运算符
// "(T|t)he|car" => The car is parked in the garage.

// 9. \ 反斜线 \ 在表达式中用于转码紧跟其后的字符。用于指定 { } [ ] / \ + * . $ ^ | ? 这些特殊字符。如果想要匹配这些特殊字符则要在其前面加上反斜线 \。
// "(f|c|m)at\.?" => The fat cat sat on the mat.

// 10. ^ 用来检查匹配的字符串是否在所匹配字符串的开头。
// "(T|t)he" => The car is parked in the garage. // The the

// 11. $ 用来接触是否在所匹配字符串结尾
// "(at\.)$" => The fat cat. sat. on the mat.  // at. at. at.

// 12. 简写字符集  
// \w : 匹配所有字母和数组等价于[a-zA-Z0-9]
// \W: 匹配非字母和数组等价于[^a-zA-Z0-9] = [^\w]
// \d: 匹配数字 = [0-9]
// \D: 匹配非数字 = [^0-9]

