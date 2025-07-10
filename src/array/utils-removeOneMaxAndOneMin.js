/**
 * 移除数组中的一个最大值和一个最小值
 * @param arr
 * @returns {*}
 */
function removeOneMaxAndOneMin(arr) {
    if (!Array.isArray(arr) || arr.length < 3) {
        return arr; // 如果数组长度小于3，直接返回原数组
    }

    // 寻找最大值和最小值
    const max = Math.max(...arr);
    const min = Math.min(...arr);

    // 只过滤掉一个最大值和一个最小值
    let maxRemoved = false;
    let minRemoved = false;
    let result = arr.filter(value => {
        if (value === max && !maxRemoved) {
            maxRemoved = true;
            return false; // 过滤掉第一个最大值
        }
        if (value === min && !minRemoved) {
            minRemoved = true;
            return false; // 过滤掉第一个最小值
        }
        return true; // 保留其他值
    });

    return result;
}
