/**
 * Date:2021/1/20
 * Desc:
 * @param element {HTMLElement}
 * @param child {HTMLElement}
 */

// 移除一个元素节点的(指定节点)或者(所有子节点)
function removeChild(element, child) {
    if (child) {
        element.removeChild(child);
    } else {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }
}
