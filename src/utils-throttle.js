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


function throttle2(func, wait, options) {
    let timeout,
        context,
        args,
        result;
    let previous = 0;
    if (!options) options = {};

    const later = function() {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };

    const throttled = function() {
        const now = Date.now();
        if (!previous && options.leading === false) previous = now;
        const remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };

    throttled.cancel = function() {
        clearTimeout(timeout);
        previous = 0;
        timeout = context = args = null;
    };

    return throttled;
}
