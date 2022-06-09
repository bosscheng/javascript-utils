/**
 * @desc
 *  给定一个对象或数组，函数将返回指定路径的值，否则为 null。
 *
 * getValue({ a: { b: c: 'd' } }, 'a.b.c'); // = d
 * @param obj
 * @param path
 * @returns {T}
 */
const getValue = (obj, path) => path
    .replace(/\[([^[\]]*)]/g, '.$1.')
    .split('.')
    .filter(prop => prop !== '')
    .reduce((prev, next) => (
        prev instanceof Object ? prev[next] : undefined
    ), obj);