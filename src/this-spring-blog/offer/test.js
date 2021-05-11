/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-12-29 11:57:30
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-12-29 15:31:56
*/
function testPromise() {
    Promise.resolve(console.log(1));
    console.log(2);
}

// testPromise();

function testPromise2() {
    const p = new Promise((res, rej) => {
        console.log(1);
        res(1);
        console.log(2);
    });
    console.log(3);
    const r = p.then(function() {console.log(1)}).then((x) => {
        console.log('->',x);
    });
    console.log(r);
}
// testPromise2();
function testPromise3() {
    var promise = new Promise(function(resolve, reject){
        setTimeout(function() {
          resolve(1);
        }, 3000)
      })
      // 1
      promise.then(() => {
        return Promise.resolve(2);
      }).then((n) => {
        console.log(n)
      });
      
      // 2
      promise.then(() => {
        return 3
      }).then((n) => {
        console.log(n)
      });
      
      // 3
      promise.then(4).then((n) => {
        console.log(n)
      });
}

// testPromise3();
function* test() {
    let res = yield 1;
    res ? console.log('yes') : console.log('no');
    yield res ? 'yes' : 'no';
}

const i = test();
// console.log(i.next());
// console.log(i.next(1)); 

function* foo() {
    let res = 0;
    let count = 0;
    let flag = false;
    while(1) {
        count += 1;
        if (flag) {
            return '';
        }
        flag = yield res = res + count;
    }
}
const ii = foo();
console.log(ii.next());
console.log(ii.next(true));
console.log(ii.next());
console.log(ii.next());