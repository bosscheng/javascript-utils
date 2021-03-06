/**
 * Date: 8/13/20
 * @desc 元素是否可见。
 */
function isSeeing(el, options) {
    const setting = Object.assign({
        top: 0, // 元素在顶部伸出的距离
        right: 0, // 元素在右边伸出的距离才
        bottom: 0, // 元素在底部伸出的距离
        left: 0 // 元素在左边伸出的距离
    }, options)

    const bcr = el.getBoundingClientRect() // 取得元素在可视区的位置

    const mw = el.offsetWidth // 元素自身宽度
    const mh = el.offsetHeight // 元素自身的高度
    const w = window.innerWidth // 视窗的宽度
    const h = window.innerHeight // 视窗的高度
    const boolX = (!((bcr.right - setting.left) <= 0 && ((bcr.left + mw) - setting.left) <= 0) && !((bcr.left + setting.right) >= w && (bcr.right + setting.right) >= (mw + w))) // 上下符合条件
    const boolY = (!((bcr.bottom - setting.top) <= 0 && ((bcr.top + mh) - setting.top) <= 0) && !((bcr.top + setting.bottom) >= h && (bcr.bottom + setting.bottom) >= (mh + h))) // 上下符合条件

    return el.width !== 0 && el.height !== 0 && boolX && boolY
}
