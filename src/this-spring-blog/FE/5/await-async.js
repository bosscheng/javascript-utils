/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-12 12:08:00
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-12 13:33:21
 */

async function taskA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                flag: true,
                message: 'a exe success'
            })
        }, 1 * 1000);
    })
};
async function taskB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                flag: true, 
                message: 'b exe success'
            })
        }, 2 * 1000);
    })
}

async function taskC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                flag: true,
                message: 'c exe message'
            });
        }, 3 * 1000);
    })
}

async function test() {
    const ares = await taskA();
    console.log(ares.message);
    const bres = ares.flag ? await taskB() : console.log('b error');
    console.log(bres.message);
    const cres = bres.flag ? await taskC() : console.log('c error');
    if (cres.flag) {
        console.log(cres.message);
        console.log('all success amazing');
    }
}

test();