/*
* author: wancheng
* date: 2018-12-27
* desc: 防抖动
*/


function debounce(func, wait) {
    var timeout, args, context, timestamp, result

    var later = function () {
        var last = Date.now() - timestamp;
        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        }
        else {
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) {
                context = args = null;
            }
        }
    };

    return function () {
        context = this;
        args = arguments;
        timestamp = Date.now();
        if (timeout) {
            timeout = setTimeout(later, wait);
        }
        return result;
    }
}
