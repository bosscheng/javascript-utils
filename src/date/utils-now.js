/**
 * Date:2020/11/18
 * Desc:
 */
function now() {
    return window.performance
        ? window.performance.now()
        : Date.now();
}
