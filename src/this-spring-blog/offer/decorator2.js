var _class, _class2, _dec, _class3;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-22 12:01:34
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-26 16:03:27
*/
// 1. 装饰器只能用于类和类的方法，不能应用于函数。因为函数存在变量提升。
// function testable(target) {
//     target.isTest = true;
// }
// function p() {
//     console.log('begin');
//     console.log('end');
// }
// @testable
// class Test {
//     constructor(name) {
//         this.name = name;
//     }
//     @p
//     print() {
//         console.log(this);
//     }
// }
// function Decorator(cb) {
//     console.log('begin');
//     cb();
//     console.log('end');
// }
// var t = new Test('xxq');
// t.print();
// console.log(Decorator(t.print));
// class MyClass {
//     @unenumerable
//     @readonly
//     method() {
//     }
// }
// function readonly(target, prop, descriptor) {
//     descriptor.writable = false;
//     return descriptor;
// }
// function unenumerable(target, prop, descriptor) {
//     descriptor.enumerable = false;
//     return descriptor;
// }
// babel decorator.js --out-file decorator-compiled.js
let Math = mathName(_class = (_class2 = class Math {
  add(a, b) {
    console.log('执行类的方法');
    return a + b;
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "add", [log], Object.getOwnPropertyDescriptor(_class2.prototype, "add"), _class2.prototype)), _class2)) || _class;

function mathName() {
  console.log('装饰器执行name');
} // // 1. log


function log(target, name, descriptor) {
  console.log('执行装饰器'); // target: Math {} 
  // name: add
  // descriptor:  add {
  //                      value: [Function: add],
  //                      writable: true,
  //                      enumerable: false,
  //                      configurable: true
  //                  }

  const oldV = descriptor.value;

  descriptor.value = function (...arg) {
    console.log(` exe function name:${name} param:${arg.join(' and ')}`);
    return oldV(arg);
    return oldV.apply(target, arg);
    return oldV.call(target, ...arg);
  };
}

const math = new Math();
console.log(math.add(2, 4)); // // 2. 防抖

let Test = (_dec = jieliu(5000), (_class3 = class Test {
  printLog(...arg) {
    console.log(...arg);
  }

}, (_applyDecoratedDescriptor(_class3.prototype, "printLog", [_dec], Object.getOwnPropertyDescriptor(_class3.prototype, "printLog"), _class3.prototype)), _class3));

function jieliu(time) {
  let timerId = -1;
  return function Exe(target, name, descriptor) {
    return { ...descriptor,
      value: function (...arg) {
        global.clearTimeout(timerId);
        timerId = setTimeout(() => {
          descriptor.value.apply(target, arg);
        }, time);
      }
    };
  };
}

var t = new Test();
setInterval(() => {
  t.printLog('123');
}, 6 * 1000); // function dec(p) {
//     return function(target, name, descriptor) {
//         console.log('dec:', p);
//         return '2';
//     }
// }
// class Decc {
//     @dec(1)
//     log(...arg) {
//         console.log(arg);
//         console.log('1');
//     }
// }
// const D = new Decc();
