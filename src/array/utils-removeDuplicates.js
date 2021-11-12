/**
 * 从数组中移除重复项
 * @param arr
 * @returns {any[]}
 */
function utilsRemoveDuplicates(arr) {
    return [...new Set(arr)]
}