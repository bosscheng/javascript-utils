/**
 * Date:2020/11/18
 * Desc:
 */
function now() {
    return window.performance
        ? window.performance.now() / 1000
        : Date.now() / 1000;
}
