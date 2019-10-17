/*
* date: 2019-10-14
* desc:
*/

const p = Promise.resolve;

function nextTick(fn) {
    return fn ? p.then(fn) : p;
}
