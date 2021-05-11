/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-22 12:01:34
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-26 16:05:09
*/

// 1. 装饰器只能用于类和类的方法，不能应用于函数。因为函数存在变量提升。
// babel decorator.js --out-file decorator-compiled.js
// // 1. log
function log(target, name, descriptor) {
    console.log('执行装饰器');
    // target: Math {} 
    // name: add
    // descriptor:  add {
    //                      value: [Function: add],
    //                      writable: true,
    //                      enumerable: false,
    //                      configurable: true
    //                  }
    const oldV = descriptor.value;
    descriptor.value = function(...arg) {
        console.log(` exe function name:${name} param:${arg.join(' and ')}`);
        return oldV(arg);
        return oldV.apply(target, arg);
        return oldV.call(target, ...arg);
    }
}

const math = new Math();
console.log(math.add(2, 4));


// // 2. 防抖
class Test {
    @jieliu(5000)
    printLog(...arg) {
        console.log(...arg);
    }
}

function jieliu(time) {
    let timerId = -1;
    return function Exe(target, name, descriptor) {
        return {
            ...descriptor,
            value: function(...arg) {
                global.clearTimeout(timerId);
                timerId = setTimeout(() => {
                    descriptor.value.apply(target, arg);
                }, time);
            }
        };
    }
}

var t = new Test();
setInterval(() => {
    t.printLog('123');
}, 6 * 1000);

