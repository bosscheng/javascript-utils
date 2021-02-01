/**
 * Date:2021/2/1
 * 动画滚动到顶部 scrollTop animation
 * @param {HTMLElement} el DOM元素
 * @param {Number} [from=0] 开始位置
 * @param {Number} to  滚动到位置
 * @param {Number} [duration=500] 动画持续时间
 */
function scrollTop(el, from = 0, to, duration = 500) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = (
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                return window.setTimeout(callback, 1000 / 60)
            }
        )
    }
    const difference = Math.abs(from - to)
    const step = Math.ceil(difference / duration * 50)

    function scroll(start, end, step) {
        if (start === end) return

        let d = (start + step > end) ? end : start + step
        if (start > end) {
            d = (start - step < end) ? end : start - step
        }

        if (el === window) {
            window.scrollTo(d, d)
        } else {
            el.scrollTop = d
        }
        window.requestAnimationFrame(() => scroll(d, end, step))
    }

    scroll(from, to, step)
}
