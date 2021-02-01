/**
 * Date:2021/2/1
 * Desc:浏览器全屏
 * @param {HTMLElement} [el=document] 全屏元素
 */
function fullscreen(el) {
    el = el || document.documentElement;
    const rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
    if (typeof rfs !== 'undefined' && rfs) {
        rfs.call(el);
    }
}
