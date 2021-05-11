/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-27 14:52:24
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-27 16:48:04
*/
console.log({
    valueOf: function() {
        console.log('exe valueOf');
        return {};
    },
    toString: function() {
        console.log('exe toString');
        return 1
    },
} + 1);

// 工作流程：1. 首先看符号  2. 然后根据符号进行运算规则 3. 运算规则包括（valueOf，toString，toNumber，toBoolean）
// 首先了解操作
// valueOf和toString都在Object.propotype上，所以值都有这两个方法。
// valueOf：String、Number、Boolean（true）、date对象（相对于当前时间毫秒的时间）都会有正确返回值外，其他对象都返回对象本身(this)
// toString：String，Number，Boolean（true）、date对象、数组（[1,2]->1,2）,函数外，其他都会返回对应的类型

// 1. +号操作
// 1.1 如果是两个数字直接相加
// 1.2 如果是一个数字一个字符串将数字转换字符串相加
// 1.3 如果是一个数字一个boole则，boole（true->1, false->0）转为数值进行运算。
// 1.4 如果一个是数字一个是对象，则对象进行默认值转换（先调用valueOf如果返回原始值则在进行运算，如果不是原始值，则调用toString，如果返回时原始值则在进行运算，如果不是原始值则抛出type error）

console.log(' 1.1:', 1 + 1); // 2
console.log(' 1.2:', 1 + '1'); // 11
console.log(' 1.3:', 1 + true); // 2
console.log(' 1.4:', 1 + {}); // 1[object Object] // 记住对象的valueOf返回的是[object Object]

// 2. -、*、/号操作
// 2.1 如果都是数字直接相减
// 2.2 如果至少有一个不是数字则转换数字进行运算
// 2.3 如果有一个是对象，则先进行ToPrimitive运算

console.log(' 2.1:', 1 - 1); // 0
console.log(' 2.2:', 1 - true); / // 0
console.log(' 2.2:', 1- '1'); // 0
console.log(' 2.2:', 1- 'p'); // NaN // 记住字符
console.log(' 2.3:', 1 - {}); // NaN
console.log(' 2.3:', 1- {valueOf: () => 1}); // 0

// toNumber
// undefined -> NaN 
// null -> +0 |
// 布尔值 -> true转换1，false转换为+0 |
// 数字 -> 无须转换 |
// 字符串 -> 有字符串解析为数字，例如：‘324’转换为324，‘qwer’转换为NaN |
// 对象(obj) -> 先进行 ToPrimitive(obj, Number)转换得到原始值，在进行ToNumber转换为数字 |

// 3. ==号操作
// 比较运算 x==y, 其中 x 和 y 是值，返回 true 或者 false。这样的比较按如下方式进行：
// 1、若 Type(x) 与 Type(y) 相同， 则
// 1 若 Type(x) 为 Undefined， 返回 true。
// 2 若 Type(x) 为 Null， 返回 true。
// 3 若 Type(x) 为 Number， 则
// (1)、若 x 为 NaN， 返回 false。
// (2)、若 y 为 NaN， 返回 false。
// (3)、若 x 与 y 为相等数值， 返回 true。
// (4)、若 x 为 +0 且 y 为 −0， 返回 true。
// (5)、若 x 为 −0 且 y 为 +0， 返回 true。
// (6)、返回 false。
// 4 若 Type(x) 为 String, 则当 x 和 y 为完全相同的字符序列（长度相等且相同字符在相同位置）时返回 true。 否则， 返回 false。
// 5 若 Type(x) 为 Boolean, 当 x 和 y 为同为 true 或者同为 false 时返回 true。 否则， 返回 false。
// 6 当 x 和 y 为引用同一对象时返回 true。否则，返回 false。
// 2、若 x 为 null 且 y 为 undefined， 返回 true。
// 3、若 x 为 undefined 且 y 为 null， 返回 true。
// 4、若 Type(x) 为 Number 且 Type(y) 为 String，返回比较 x == ToNumber(y) 的结果。
// 5、若 Type(x) 为 String 且 Type(y) 为 Number，返回比较 ToNumber(x) == y 的结果。
// 6、若 Type(x) 为 Boolean， 返回比较 ToNumber(x) == y 的结果。
// 7、若 Type(y) 为 Boolean， 返回比较 x == ToNumber(y) 的结果。
// 8、若 Type(x) 为 String 或 Number，且 Type(y) 为 Object，返回比较 x == ToPrimitive(y) 的结果。
// 9、若 Type(x) 为 Object 且 Type(y) 为 String 或 Number， 返回比较 ToPrimitive(x) == y 的结果。
// 10、返回 false。

// 注 第9条重点

console.log(' 9:', 1 == {}) // false
console.log(' 9:', 1 == {valueOf: () => 1}); // true
