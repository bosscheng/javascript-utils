/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-07 21:25:42
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-08 14:22:57
 */
// https://juejin.cn/post/6844903512845860872#heading-1
// https://zhuanlan.zhihu.com/p/33087629
// 浏览器宏任务：script，setTimeout、setInterval、setImmediate、I/O、UI交互事件、ajax、回调函数、事件绑定
// 浏览器微任务：Promise、process.nextTick、MutaionObserver
// event loop规范  
// 1. 执行microtask，然后不停执行，直到清空队列
// 2. 渲染
// 3. 执行宏任务task，然后渲染再看微任务是否有任务

// 浏览器和node规范timer规范： timer(setTimeout和setInterval)浏览器规范：delay这个参数最小为4ms

// 我们先看timer规范
// 所以说以下代码：
// setTimeout(() => {
// 	console.log(2)
// }, 2)

// setTimeout(() => {
// 	console.log(1)
// }, 1)

// setTimeout(() => {
// 	console.log(0)
// }, 0)
// 在浏览器中应该输出2 1 0 // 这是按照规范来说（但是实际浏览器没有按照这种实现）
// 浏览器实现
// double intervalMilliseconds = std::max(oneMillisecond, interval * oneMillisecond); 
// 实现上可以看出当interval传入的是0和1的时候得到的结果是一样的都是1，但是传入4的时候得到的结果是4，所以说
// 在浏览器中0和1效果是一样的就看谁写在前面，4永远都是后面执行。所以在浏览器输出：1 0 2

// node实现
// if (!(after >= 1 && after <= TIMEOUT_MAX))
//   after = 1; // schedule on next tick, follows browser behavior
// 代码中的注释直接说明了，设置最低1ms的行为是为了向浏览器行为看齐。



// 注：例子
// setTimeout(() => {
// 	console.log(2)
// }, 2)

// setTimeout(() => {
// 	console.log(1)
// }, 1)

// setTimeout(() => {
// 	console.log(0)
// }, 0)

// 小知识点：timer最小延迟是4ms（其他时间留给cpu休息）node环境不确定（有时候 102 有时候210）  浏览器环境输出： 1 0 2 


// 我们再看event loop规范  
// 浏览器符合规范
// node不太符合规范：node中process.nextTick优先执行  
console.log('evet loop node');
console.log(1)

setTimeout(() => {
    console.log(2)
    new Promise(resolve => {
        console.log(4)
        resolve()
    }).then(() => {
        console.log(5)
    })
    process.nextTick(() => {
        console.log(3)
    })
})

new Promise(resolve => {
    console.log(7)
    resolve()
}).then(() => {
    console.log(8)
})

process.nextTick(() => {
    console.log(6)
})

setTimeout(() => {
    console.log(9)
    process.nextTick(() => {
        console.log(10)
    })
    new Promise(resolve => {
        console.log(11)
        resolve()
    }).then(() => {
        console.log(12)
    })
})