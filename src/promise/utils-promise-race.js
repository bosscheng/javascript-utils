/**
 * Promise.race(iterable) 方法会返回一个 promise 对象，
 * 一旦迭代器中的某个 promise 对象 resolved 或 rejected，返回的 promise 对象就会 resolve 或 reject 相应的值。
 * @param iterators
 * @returns {Promise}
 * @constructor
 */
function UtilsPromiseRace(iterators) {
    return new Promise((resolve, reject) => {
        for (const iter of iterators) {
            Promise.resolve(iter).then((res) => {
                resolve(res);
            }).catch((e) => {
                reject(e);
            })
        }
    })
}