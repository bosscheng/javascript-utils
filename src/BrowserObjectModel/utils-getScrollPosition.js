/**
 * 返回当前页的滚动位置。 如果已定义, 则使用pageXOffset和pageYOffset , 否则scrollLeft和scrollTop。
 * 可以省略el以使用window的默认值.
 * @param el
 */
function utilsGetScrollPosition(el = window) {
    return ({
        x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
        y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
    });
}