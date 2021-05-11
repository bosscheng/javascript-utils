/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-26 17:58:01
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-26 18:30:18
*/
var obj = {
    name: 'xxq',
    age: 22,
}

// 1. 自己实现interator
function Self(obj) {
    let count = 0;
    return {
        next() {
            if (count >= Object.keys(obj).length) {
                return {
                    done: true,
                    value: '',
                }
            }
            var value = obj[Object.keys(obj)[count]];
            var type = typeof value;
            count += 1;
            return {
                done: false,
                value: `${value}-${type}`
            }
        }
    }
}

var it = Self(obj);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

// yiled
obj[Symbol.iterator] = function() {
    let count = 0;
    return {
        next() {
            if (count >= Object.keys(obj).length) {
                return {
                    done: true,
                    value: '',
                }
            }
            var value = obj[Object.keys(obj)[count]];
            var type = typeof value;
            count += 1;
            return {
                done: false,
                value: `${value}-${type}`
            }
        }
    }
};
for (let value of obj) {
    console.log(value);
}
