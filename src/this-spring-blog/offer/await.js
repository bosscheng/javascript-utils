
/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-15 12:56:45
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-15 12:59:13
*/
async function Sleep(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, time);
    });
}

async function test() {
    for(let i = 0; i < 5; i += 1) {
        await Sleep(i * 1000);
        console.log(i);
    }
}


test();