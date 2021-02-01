/**
 * Date:2020/10/28
 * Desc:
 */
function scrollBarWidth() {
    const outer = document.createElement('div');
    outer.className = 'scrollbar__wrap';
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    document.body.appendChild(outer);

    const widthNoScroll = outer.offsetWidth;
    // 强制滚动条
    outer.style.overflow = 'scroll';

    const inner = document.createElement('div');
    inner.style.width = '100%';
    outer.appendChild(inner);

    const widthWithScroll = inner.offsetWidth;
    const parentNode = outer.parentNode;
    parentNode && parentNode.removeChild(outer);
    const scrollBarWidth = widthNoScroll - widthWithScroll;

    return scrollBarWidth;
}
