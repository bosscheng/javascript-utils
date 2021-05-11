/*   
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-21 22:18:07
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-27 16:55:53
*/
// 1. vue key  

// 2.
/**
 * ['1', '2', '3'].map(parseInt)  what & why
 * 1, NaN, NaN
 * 
 * 知识点：
 * 1. [].map((value, key, item) => {})
 * 2. parseInt(string, radius);解析一个字符串并返回指定基数的十进制整数， radix 是2-36之间的整数，表示被解析字符串的基数。radius代表进制。
 * eg: parseInt('123', 5) // 将'123'看作5进制数，返回十进制数38 => 1*5^2 + 2*5^1 + 3*5^0 = 38
 * 
 */

['1', '2', '3', '2'].map((value, key, item) => {
    console.log(parseInt(value, key));
    // 1: 当radius是0的时候，且string不是以0X和0开头，那么就转成10进制，所以结果为10
    // 2: 当radius是1的时候，由于最大的string只能小于1而且，radius是2-36之间的数。所以为NaN
    // 3: 当radius是2的时候，由于最大的string只能小于2，所以为NaN
    // 2: 当radius是3的时候，2*3^0 = 2
})

//  3. 防抖和节流  
// 防抖是一个事件延迟ns执行，如果ns内触发就重新计算时间。
function doubble(fn, time) {
    let timerId = -1;
    let content = this;
    let arg = arguments;
    return function() {
        globalThis.clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn.apply(content, arg);
        }, time);
    }
}
// let dou = doubble((...arg) => {
//     console.log('1', ...arg);
// }, 3000);
// setInterval(() => {
//     dou();
// }, 1000);

// 节流是一个事件延迟ns执行，如果ns内触发则取消上一次，只执行最后一次。
function trottle(fn, time) {
    let exe = false;
    let content = this;
    let arg = arguments;
    console.log(arg);
    return function() {
        if (exe) return;
        exe = true;
        setTimeout(() => {
            exe = false;
            fn.apply(content, arg);
        }, time);
    }
}
// let tro = trottle(trottle((...arg) => {
//     console.log('1', ...arg);
// }, 3000));
// setInterval(() => {
//     tro();
// }, 1000);

// 4. 闭包: 一个函数m被调用返回另外一个函数n，n引用了m函数中的变量是的n函数运行时候能引用到变量这就叫做闭包。    
function bibao() {
    let flag = true;
    return function change() {
        console.log(flag);
        flag = !flag;
    }
}

var res = bibao();
res(); // true
res(); // false
res(); // true

// 5. （头条、微医）Async/Await 如何通过同步的方式实现异步

// 6. （头条）异步笔试题 宏任务队列和微任务队列
// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }
// async function async2() {
//     console.log('async2');
// }
// console.log('script start');
// setTimeout(function() {
//     console.log('setTimeout');
// }, 0)
// async1();
// new Promise(function(resolve) {
//     console.log('promise1');
//     resolve();
// }).then(function() {
//     console.log('promise2');
// });
// console.log('script end');

// 7. var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
function flatSort(arr) {
    function flat(arr, last) {
        for (let i = 0; i < arr.length; i += 1) {
            if (Array.isArray(arr[i])) {
                flat(arr[i], last);
            }
        }
        return arr.concat(last);
    }

    function deleteRepeat(arr) {
        return Array.from(new Set(arr));
    }
    flat(arr, []);
    return deleteRepeat(res).sort((a,b) => a - b);
}
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// var res = flatSort(arr);
// console.log(res);
function flat(arr, last) {
    for (let i = 0; i < arr.length; i += 1) {
        if (Array.isArray(arr[i])) {
            flat(arr[i], last);
        }
    }
    return arr.concat(last);
}
// console.log(flat(arr, []));

// 拓展数组扁平化实现 
// 1. 广度遍历
function flat1(arr) {
    let stack = arr.concat([]);
    let res = [];
    while(stack.length > 0) {
        const item = stack.pop();
        if (Array.isArray(item)) {
           stack = stack.concat(item);
        } else {
            res.push(item);
        }
    }
    return res;
}
// 2. 递归
function flat2(arr) {
    var res = [];
    function childFlat(arr) {
        for (let i = 0; i < arr.length; i += 1) {
            if (Array.isArray(arr[i])) {
                childFlat(arr[i]);
            } else {
               res.push(arr[i]);
            }
        }
    }
    childFlat(arr);
    return res;
}
// 3. reduce
function flat3(arr) {
    return arr.reduce((acc, curr) => {
          if (Array.isArray(curr)) {
            acc = acc.concat(flat3(curr));
        } else {
            acc.push(curr);
        }
        return acc;
    }, [])
}

// 4. 递归
function flat4(arr, last) {
    for (let i = 0; i < arr.length; i += 1) {
        if (Array.isArray(arr[i])) {
            last = last.concat(flat4(arr[i], []));
        } else {
            last.push(arr[i]);
        }
    }
    return last;
}

// 5. flat
function flat5(arr) {
    return arr.flat(Infinity);
}
console.log(flat1(arr));
console.log(flat2(arr));
console.log(flat3(arr));
console.log(flat4(arr, []));

// 1. 去重(无序) 
function repeat(arr) {
    let results = []; // 这里也可以用map来记录
    arr.forEach(element => {
        // 这里记住includes是Array的方法，indexof是String的方法
        if (!results.includes(element)) {
            results.push(element);
        }
    });
    return results;
}

// 2. 去重（无序）
function repeat2(arr) {
    return Array.from(new Set(arr));
}
var test = [1,2,3,3,4,4,5];
console.log(repeat(JSON.parse(JSON.stringify(test))));
console.log(repeat2(test));
// 1. 排序（桶排序）
function sort1(arr) {
    var res = [];
    var rres = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (res[arr[i]] === undefined) res[arr[i]] = 0; 
        res[arr[i]] += 1;
    }
    for (let i = 0; i < res.length; i += 1) {
        let count = 0;
        while(count < res[i]) {
            rres.push(i);
            count += 1;
        }
    }
    return rres;
}

// 2. 排序（冒泡排序）
function sort2(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] =[arr[j], arr[i]];
            }
        }
    }
    return arr;
}

// 3. 排序（快排）
function sort3(arr) {
    
}

// 4. 排序（堆排序）

var test = [1,3,6,2,4,5];
console.log(sort1(JSON.parse(JSON.stringify(test))));
console.log(sort2(JSON.parse(JSON.stringify(test))));


// （京东）下面代码中 a 在什么情况下会打印 1？
// var a = ?;
// if(a == 1 && a == 2 && a == 3){
//     conso.log(1);
// }

var a = {
    i: 0,
    toString: function() {
        a.i += 1;
        return a.i;
    }
}
if(a == 1 && a == 2 && a == 3){
    console.log(1);
}

// 为什么在 Vue3.0 采用了 Proxy，抛弃了 Object.defineProperty？
// 1. Object.defineProperty无法监控到数组下标的变化，导致通过数组下标添加元素，不能实时响应；
// 2. Object.defineProperty只能劫持对象的属性，从而需要对每个对象，每个属性进行遍历，如果，属性值是对象，还需要深度遍历。Proxy可以劫持整个对象，并返回一个新的对象。
// 3. Proxy不仅可以代理对象，还可以代理数组。还可以代理动态增加的属性。