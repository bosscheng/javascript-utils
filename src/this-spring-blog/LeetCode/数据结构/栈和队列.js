/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-09-17 22:20:30
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-09-17 22:44:49
 */
var decodeString = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i += 1 ) {
      const item = s[i];
      if (item == ']') {
        let str = '';
        console.log(stack.length, stack);
        const stackLen = stack.length;
        for (let j = 0; j < stackLen; j += 1) {
          const item1 = stack.pop();
          console.log('item1:', item1, j, stack.length);
          if (item1 == '[') {
            console.log("---",stack);
            break;
          } else {
            // console.log('item:',item1);
            str = item1 + str;
          }
        }
        // 获得了循环字符串
        const count = stack.pop();
        console.log(stack, str, count);
        let res = '';
        for (let m = 0; m < count; m += 1) {
          res += str;
        }
        stack.push(res);
        console.log(stack);
      } else {
        stack.push(item);
      }
    }
    return stack.join('')
  };
var test = "3[a2[c]]";
console.log(decodeString(test));