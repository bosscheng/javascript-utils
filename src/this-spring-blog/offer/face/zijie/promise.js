/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-04-08 21:37:59
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-04-08 21:45:42
 */
// promise.all promise.race
// all

const p1 = new Promise((ok, no) => {
    no(1);
    // throw new Error('11')
});

const p2 = new Promise((ok, no) => {
    ok(2);
});

Promise.all([p1, p2]).then((res) => {
    console.log('all success', res);
}).catch((e) => {
    console.log('fail', e);
});

Promise.race([p1, p2]).then((res) => {
    console.log(' some one is ok:', res);
}).catch((e) => {
    console.log(' fail:', e);
})