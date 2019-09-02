// 获取外层高度

// 依赖 getWidth + getHeight
// 主要是 height + borderTopWidth + paddingTop + paddingBottom + borderBottomWidth

function getOuterHeight(dom) {
    const height = this.getHeight(dom);
    const bTop = parseFloat(this.getStyle(dom, 'borderTopWidth')) || 0;
    const pTop = parseFloat(this.getStyle(dom, 'paddingTop')) || 0;
    const pBottom = parseFloat(this.getStyle(dom, 'paddingBottom')) || 0;
    const bBottom = parseFloat(this.getStyle(dom, 'borderBottomWidth')) || 0;
    return height + bTop + bBottom + pTop + pBottom;
}

// 主要是 width + borderLeftWidth + paddingLeft + paddingRight + borderRightWidth

function getOuterWidth(dom) {
    const width = this.getWidth(dom);
    const bLeft = parseFloat(this.getStyle(dom, 'borderLeftWidth')) || 0;
    const pLeft = parseFloat(this.getStyle(dom, 'paddingLeft')) || 0;
    const pRight = parseFloat(this.getStyle(dom, 'paddingRight')) || 0;
    const bRight = parseFloat(this.getStyle(dom, 'borderRightWidth')) || 0;
    return width + bLeft + bRight + pLeft + pRight;
}
