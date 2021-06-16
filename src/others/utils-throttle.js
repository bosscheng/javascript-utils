/**
 * 节流
 */


/**
 *
 * @param fn 函数
 * @param wait 间隔时间
 * @returns {Function}
 */
function throttle(fn, wait) {
    var pre = new Date();
    return function () {
        const args = arguments;
        var now = new Date();

        if (now - pre > wait) {
            fn.apply(this, args);
            pre = new Date();
        }
    };
}

