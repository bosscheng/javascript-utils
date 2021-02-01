/*
* date: 2019-08-07
* desc: 获取样式
*/

/**
 *
 * @param dom dom 节点
 * @param name 样式名
 * @param defaultValue 默认值
 */
function getStyle(dom, name) {
    try {
        if (window.getComputedStyle) {
            return window.getComputedStyle(dom, null)[name];
        }
        //
        return dom.currentStyle[name];
    } catch (e) {
        return null;
    }
}


function getComputedStyle(el, key) {
    return el && el.currentStyle ? el.currentStyle[key] : window.getComputedStyle ? window.getComputedStyle(el, void 0).getPropertyValue(key) : el.style[key];
}
