/**
 * 获取 scrollbar 宽度
 * @returns {number}
 */
function getScrollbarWidth() {
    const div = document.createElement('div');
    div.style.visibility = 'hidden';
    div.style.width = '100px';
    document.body.appendChild(div);
    const offsetWidth = div.offsetWidth;
    div.style.overflow = 'scroll';
    const childDiv = document.createElement('div');
    childDiv.style.width = '100%';
    div.appendChild(childDiv);
    const childOffsetWidth = childDiv.offsetWidth;
    div.parentNode.removeChild(div);
    return offsetWidth - childOffsetWidth;
}