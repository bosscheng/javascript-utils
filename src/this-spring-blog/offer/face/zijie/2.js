/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-01-08 17:36:22
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-01-08 18:07:47
*/

function limit(max) {
    let maxReq = max;
    let waitTask = [];
    let count = 0;
    const exe = () => {
        if (count >= maxReq) return;
        if (waitTask.length > 0) {
            count += 1;
            const item = waitTask.shift();
            item.req().then((res) => {
                item.ok(res);
            }).catch((e) => {
                item.no(e);
            }).finally(() => {
                count -= 1;
                exe();
            })
        }
    };
    return new Promise((ok, no) => {
            waitTask.push({
                ok,
                no,
                req,
            });
            exe();
    })
};
