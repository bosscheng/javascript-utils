/**
 *
 * @param ele
 * @desc 获取元素${ele}的所有兄弟元素
 * @returns {*[]}
 */
function utilsSiblings(ele){
    return [].slice.call(ele.parentNode.children).filter((child) => child !== ele);
}

