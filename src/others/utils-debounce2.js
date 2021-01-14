/**
 * Date:2021/1/14
 * Desc:
 */
function debounce(fun, delay) {
    return function () {
        let that = this
        let args = arguments
        clearTimeout(fun.id)
        fun.id = setTimeout(function () {
            fun.call(that, args )
        }, delay)
    }
}
