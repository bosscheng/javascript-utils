/*
* date: 2020-02-04
* desc:获取一个元素距离文档document的位置，类似jquery 的offset() 方法。
*/
function offset(ele) {
    var pos = {
        left: 0,
        top: 0
    };

    while (ele) {
        pos.left += ele.offsetLeft;
        pos.top += ele.offsetTop;
        ele = ele.offsetParent;
    }

    return pos;
}
