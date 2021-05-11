/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-11 16:42:49
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-12 14:19:22
*/
// A, B, C

function* progress() {
    yield  setTimeout(() => {
        console.log('A');
    }, 2 * 1000);
    yield setTimeout(() => {
        console.log('B');
    }, 1 * 1000);
    return 'C';
}

const p = progress();
console.log(p.next());

function* add() {
    let y = 0;
    for (let i = 1; true; i += 1) {
        y = yield i + y;
    }
}

const a = add();
var t1 = a.next(0);

var t2 = a.next(t1.value);
var t3 = a.next(t2.value);

function* req() {
    var res = yield fetch('https://api.github.com/users/github');
    console.log(` 获取到blog地址：${res.blog}`);
    return true;
}

const rr = req();
const promiseFetch = rr.next();
promiseFetch.value.then((res) => res.json()).then((res) => {
    rr.next(res);
});