function utilsDebounce3(func, wait, context) {
    let timeout;

    function fn(...args) {
        const later = function later() {
            timeout = null;
            func.apply(context, args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    }

    fn.clearTimeout = function ct() {
        clearTimeout(timeout);
        timeout = null;
    }

    return fn;
}