/*
* date: 2019-08-07
* desc:
*/

// 依赖 getStyle
function getStyle(dom, name, defaultValue) {
    try {
        if (window.getComputedStyle) {
            return window.getComputedStyle(dom, null)[name];
        }
        //
        return dom.currentStyle[name];
    } catch (e) {
        if (defaultValue) {
            return defaultValue;
        }
        return null;
    }
}


function getWidth(dom, defaultValue) {
    let width = getStyle(dom, 'width', defaultValue);
    if (width === 'auto') {
        width = dom.offsetWidth;
    }
    return parseFloat(width);
}
