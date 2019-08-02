/**
 *
 * @param data
 * @param func
 *
 * 需要考虑 data 是否数组 还是对象
 *
 * 如果数组，直接遍历 item index
 *
 * 如果是对象的话，则另外一种形式遍历，key,value
 *
 * 同时支持 返回 false 来停止后续的循环。
 *
 */
const isObject = function (value) {
    /**
     * isObject({}) => true
     * isObject([1, 2, 3]) => true
     * isObject(Function) => true
     * isObject(null) => false
     */
    const type = typeof value;
    return value !== null && type === 'object' || type === 'function';
};

function each(data, func) {
    if (!data) {
        return;
    }
    let result;

    if (Array.isArray(data)) {
        for (let i = 0, len = data.length; i < len; i++) {
            result = func(data[i], i);
            if (result === false) {
                break;
            }
        }
    } else if (isObject(data)) {
        for (const k in data) {
            if (data.hasOwnProperty(k)) {
                result = func(data[k], k);
                if (result === false) {
                    break;
                }
            }
        }
    }

}
