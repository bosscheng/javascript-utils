/**
 * Date:2021/2/1
 * Desc: 浏览器当前是否全屏
 * @return {*|boolean}
 */

function isFullScreen() {
    return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
}
