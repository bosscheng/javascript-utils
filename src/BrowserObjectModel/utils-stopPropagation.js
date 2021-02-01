/**
 * 阻止传播
 *
 *      结合 stopPropagation 方法与 cancelBubble 方法
 * */
var stopPropagation = function (e) {
    if (!e) {
        return;
    }

    //
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
};
