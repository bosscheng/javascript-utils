/**
 * Date:2021/2/1
 * 判断元素是否隐藏
 * @param  {HTMLElement} el 元素DOM对象
 * @return {boolean} 是否隐藏
 */
function isHidden(el) {
    const style = window.getComputedStyle(el);
    return (style.display === 'none' || style.visibility === 'hidden')
}
