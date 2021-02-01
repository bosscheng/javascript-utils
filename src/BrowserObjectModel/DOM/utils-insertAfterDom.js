/**
 * Date:2021/2/1
 * 在元素前插入元素
 * @param {HTMLElement} newEl 新DOM元素
 * @param {HTMLElement} targetEl 在指定目标DOM元素前插入
 */
function insertAfter(newEl, targetEl) {
    const parentEl = targetEl.parentNode
    if (parentEl.lastChild === targetEl) {
        parentEl.appendChild(newEl)
    } else {
        parentEl.insertBefore(newEl, targetEl.nextSibling)
    }
}
