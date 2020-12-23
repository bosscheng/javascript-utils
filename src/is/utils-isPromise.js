/**
 *
 * @param val
 * @desc:
 *      必须包含 then 和 catch 方法。
 * @returns {*|boolean}
 */
function isPromise(val) {
    return val && typeof val.then === 'function' && typeof val.catch === 'function';
}
