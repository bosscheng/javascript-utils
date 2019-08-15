function extend(to) {
    // 获取从第二个参数开始后面的参数。
    var objs = [].slice.call(arguments, 1);
    var tempObj = {};
    //
    for (var i = 0, len = objs.length; i < len; i++) {
        tempObj = objs[i];
        for (var prop in tempObj) {
            to[prop] = tempObj[prop];
        }
    }

    return to;
}
