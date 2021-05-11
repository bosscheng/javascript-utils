/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-12 13:31:59
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-12 13:37:33
*/

function taskA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                flag: true,
                message: 'a exe success'
            })
        }, 1 * 1000);
    })
};
function taskB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                flag: true, 
                message: 'b exe success'
            })
        }, 2 * 1000);
    })
}

function taskC() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                flag: true,
                message: 'c exe message'
            });
        }, 3 * 1000);
    })
};

taskA().then(res => {
    if (res.flag) {
        console.log(res.message);
        taskB().then(res => {
            if (res.flag) {
                console.log(res.message);
                taskC().then(res => {
                    if (res.flag) {
                        console.log(res.message);
                        console.log('all exe success amazing');
                    }
                })
            }
        })
    }
});