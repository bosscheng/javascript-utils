
/**
 * 阻止默认事件的发生
 *   如果使用jQuery的话，可以使用return false（jQuery 兼容）
 *
 *      主要依赖于如果支持 preventDefault 方法，如果不支持就是用returnValue
 * */
var preventDefault = function (e) {
    if (!e) {
        return;
    }

    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
};
