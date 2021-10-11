/**
 * 如果指定的元素在视区中可见, 则返回true , 否则为false
 * 使用Element.getBoundingClientRect()和window.inner(Width|Height)值以确定给定元素在视区中是否可见。
 * 省略第二个参数以确定该元素是否完全可见, 或指定true以确定它是否部分可见。
 */
function utilsIsElementIsVisibleInViewport(el, partiallyVisible = false) {
    const {top, left, bottom, right} = el.getBoundingClientRect();
    return partiallyVisible
        ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}