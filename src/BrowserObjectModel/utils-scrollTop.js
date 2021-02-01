/*
* date: 2020-02-04
* desc: 在${duration} 时间内，滚动条平滑滚到${to}指定位置
*/
function _setScrollTop(value) {
    window.scrollTo(0, value);
    return value;
}

function _getScrollTop() {
    return (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

}

var _requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();


function scrollTop(to, duration) {
    if (duration < 0) {
        _setScrollTop(to);
        return;
    }


    var diff = to - _getScrollTop();

    if (diff === 0) return;

    var step = diff / duration * 10;

    _requestAnimFrame(function () {
        if (Math.abs(step) > Math.abs(diff)) {
            _setScrollTop(_getScrollTop() + diff);
        }

        _setScrollTop(_getScrollTop() + diff);

        if (diff > 0 && _getScrollTop() >= to || diff < 0 && _getScrollTop() <= to) {
            return;
        }

        scrollTop(to, duration - 16);
    })

}
