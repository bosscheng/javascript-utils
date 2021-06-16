function utilsThrottle3(callback, delay) {
    let isThrottled = false;
    let args;
    let context;
    function fn(...args2) {
        if (isThrottled) {
            args = args2;
            context = this;
            return;
        }

        isThrottled = true;
        callback.apply(this, args2);
        setTimeout(() => {
            isThrottled = false;
            if (args) {
                fn.apply(context, args);
                args = null;
                context = null;
            }
        }, delay);
    }

    return fn;
}