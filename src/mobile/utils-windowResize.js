/*
* date: 2020-02-04
* desc: h5 软键盘缩回，弹出回调。
* 当软件键盘弹起会改变当前的window.innerHeight 监听这个值变化。
*/
function _noop() {

}

function windowResize(downCallback, upCallback) {
    var clientHeight = window.innerHeight;

    downCallback = typeof downCallback === 'function' ? downCallback : _noop;
    upCallback = typeof upCallback === 'function' ? upCallback : _noop;

    window.addEventListener('resize', () => {
        var height = window.innerHeight;
        if (height === clientHeight) {
            downCallback();
        }
        if (height < clientHeight) {
            upCallback();
        }
    }, false)
}
