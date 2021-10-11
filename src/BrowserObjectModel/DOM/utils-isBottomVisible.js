/**
 * 如果页的底部可见, 则返回true , 否则为false
 * 使用scrollY、 scrollHeight和clientHeight来确定页面底部是否可见。
 * @returns {boolean|number}
 */
function utilsIsBottomVisible() {
    return document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight || document.documentElement.clientHeight;
}
