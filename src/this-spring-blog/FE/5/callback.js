/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-12 11:56:40
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-12 12:07:51
 */

function taskA() {
    setTimeout(() => {
        taskA.success(true, 'a exe success');
    }, 1 * 1000);
};

function taskB() {
    setTimeout(() => {
        taskB.success(true, 'b exe success');
    }, 2 * 1000);
}

function taskC() {
    setTimeout(() => {
        taskC.success(true, 'c exe success');
    }, 3 * 1000); 
}

taskA.success = function(flag, message) {
    if (flag) {
        console.log(message);
        taskB();
        taskB.success = function(flag, message) {
            if (flag) {
                console.log(message);
                taskC();
                taskC.success = function(flag, message) {
                    if (flag) {
                        console.log(message);
                        console.log('amazing all success');
                    }
                }
            }
        }
    }
};

taskA();