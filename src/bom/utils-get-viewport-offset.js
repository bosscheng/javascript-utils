/**
 * Date:2020/10/28
 * Desc:获取当前元素的left，top偏移
 *  left: 元素最左侧距离文档左侧的距离
 *  top: 元素最顶端距离文档顶端的距离
 *  right: 元素最右侧距离文档右侧的距离
 *  bottom: 元素最底端距离文档底端的距离
 *  rightIncludeBody: 元素最左侧距离文档右侧的距离
 *  bottomIncludeBody: 元素最底端距离文档最底部的距离
 */
function getViewportOffset(element) {
    const doc = document.documentElement;
    const docScrollLeft = doc.scrollLeft;
    const docScrollTop = doc.scrollTop;

    const docClientLeft = doc.clientLeft;
    const docClientTop = doc.clientTop;

    const pageXOffset = window.pageXOffset;
    const pageYOffset = window.pageYOffset;


    const {left: retLeft, top: rectTop, width: rectWidth, height: rectHeight} = element.getBoundingClientRect();

    const scrollLeft = (pageXOffset || docScrollLeft) - (docClientLeft || 0);
    const scrollTop = (pageYOffset || docScrollTop) - (docClientTop || 0);
    const offsetLeft = retLeft + pageXOffset;
    const offsetTop = rectTop + pageYOffset;

    const left = offsetLeft - scrollLeft;
    const top = offsetTop - scrollTop;

    const clientWidth = window.document.documentElement.clientWidth;
    const clientHeight = window.document.documentElement.clientHeight;

    return {
        left: left,
        top: top,
        right: clientWidth - rectWidth - left,
        bottom: clientHeight - rectHeight - top,
        rightIncludeBody: clientWidth - left,
        bottomIncludeBody: clientHeight - top,
    };
}
