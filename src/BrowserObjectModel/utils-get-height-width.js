/*
* date: 2019-08-07
* desc:
*/

// 依赖 getStyle
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

//
function getWidth(dom) {
    let width = getStyle(dom, 'width');
    if (width === 'auto') {
        width = dom.offsetWidth;
    }
    return parseFloat(width);
}

//
function getHeight(dom) {
    let height = getStyle(dom, 'height');
    if (height === 'auto') {
        height = dom.offsetHeight;
    }
    return parseFloat(height);
}
