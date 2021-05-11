/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-12 13:39:23
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-12 13:57:48
*/

function* Main() {
    var ares = '', bres='', cres='';
    taskA();
    ares = yield;
    if (ares.flag) {
        console.log(ares.message);
        taskB();
        bres = yield;
    } else {
        yield;
    }
    if (bres.flag) {
        console.log(bres.message);
        taskC();
        cres = yield;
    } else {
        yield;
    }
    if (cres.flag) {
        console.log(cres.message);
        console.log('all exe success amazing');
    }
    return true;
}

function taskA() {
    setTimeout(() => {
        it.next({
            flag: true,
            message: 'a exe success'
        })
    }, 1 * 1000);
};

function taskB() {
    setTimeout(() => {
        it.next({
            flag: true,
            message: 'b exe success'
        })
    }, 2 * 1000);
}

function taskC() {
    setTimeout(() => {
        it.next({
            flag: true,
            message: 'c exe success'
        })
    }, 3 * 1000); 
}

var it = Main();
it.next();