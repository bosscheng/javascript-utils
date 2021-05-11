/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-31 00:40:54
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-31 01:25:33
*/
// limitFn = L(limit);
// limitFn(reqFn) => Promise<Data>
// limitFn(reqFn) => Promise<Data>
// limitFn(reqFn) => Promise<Data>
// limitFn(reqFn) => Promise<Data>
// limitFn(reqFn) => Promise<Data>
// limitFn(reqFn) => Promise<Data>
// limitFn(reqFn) => Promise<Data>

function L(limit) {
    let limit = limit;
    let count = 0;
    let waitQue = [];
    function exe() {
        if (count > this.limit) return;
        const item = waitQue.shift();
        count += 1;
        item['req']().then((res) => {
            count -= 1;
            item['ok'](res);
            exe();
        });
    }
    return function(req) {
        const p = new Promise((ok, no) => {
            waitQue.push({
                req,
                ok,
                no,
            });
            exe();
        });
        return p;
    }
}




// 
// req(Fn1); => Promise<Data>
// req(Fn2);
// req(Fn3);
// ....

function reqWrapper() {
    let reqCount = 0;
    let resCount = 0;
    let res = [];
    function checkTask() {
        res = res.sort((a, b) => {a.count - b.count});
        for (let i = 0; i < res.length; i += 1) {
            if (res[i].count <= resCount) {
                res[i]['ok'](res[i]['data']);
            }
        }
    }
    return function(fn) {
        reqCount += 1;
        const p = new Promise((ok, no) => {
            ok.count = reqCount;
            fn().then((data) => {
                reqCount += 1;
                res.push({
                    ok,
                    no,
                    count: ok.count,
                    data: data
                });
                checkTask();
            })
        });
        return p;
    }
}

const req = reqWrapper();
req(Fn1);