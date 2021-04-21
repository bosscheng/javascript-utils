/**
 * Promise.all(iterable) 方法会返回一个 promise 对象，当输入的所有 promise 对象的状态都变成 resolved 时，返回的 promise 对象就会以数组的形式，
 * 返回每个 promise 对象 resolve 后的结果。当输入的任何一个 promise 对象状态变成 rejected 时，则返回的 promise 对象会 reject 对应的错误信息。
 * @param iterators
 * @returns {Promise}
 * @constructor
 */
function UtilsPromiseAll(iterators) {
    return new Promise((resolve, reject) => {
        if (!iterators || iterators.length === 0) {
            resolve([]);
        } else {
            let count = 0; // 计数器，用于判断所有任务是否执行完成
            let result = []; // 结果数组

            for (let i = 0; i < iterators.length; i++) {
                Promise.resolve(iterators[i]).then(
                    (data) => {
                        result[i] = data; // 按顺序保存对应的结果
                        // 当所有任务都执行完成后，再统一返回结果
                        if (++count === iterators.length) {
                            resolve(result);
                        }
                    },
                    (err) => {
                        reject(err); // 任何一个Promise对象执行失败，则调用reject()方法
                        return;
                    }
                )
            }
        }
    })
}