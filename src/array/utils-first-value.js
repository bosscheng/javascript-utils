/**
 *
 * @param data
 * @param name
 * @returns {null}
 *
 * 从对象数组里面查找，是否含有name 属性，如果有，然后查看 对应的
 * value 的内容。
 *
 * 如果value 是数组，则返回数组的第一个。
 * 如果value 不是数组，则直接返回value。
 */
function firstValue(data = [], name) {
    let result = null;
    let length = data.length;
    for (let i = 0; i < length; i++) {
        const obj = data[i];
        const value = obj[name];
        if (value) {
            if (Array.isArray(value)) {
                result = value[0];
            } else {
                result = value;
            }
            break;
        }
    }

    return result;
}
