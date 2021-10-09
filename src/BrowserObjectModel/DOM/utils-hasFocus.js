/**
 *
 * @param ele
 * @desc 检查元素${ele}是否被聚焦
 * @returns {boolean}
 */
function utilsHasFocus(ele){
    return ele === document.activeElement;
}