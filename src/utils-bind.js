/*
* author: wancheng
* date: 2019-04-13
* desc:
*/
function bind(fn, context) {
    return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0, len = args.length; i < len; i++) {
            args[i] = arguments[i];
        }
        return fn.apply(context, args);
    }
}
