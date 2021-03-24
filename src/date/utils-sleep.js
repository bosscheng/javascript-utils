/**
 * sleep 堵塞 ${time} ms
 * @param time
 */
function sleep(time) {
    let _now = Date.now();
    for (; Date.now() - _now <= time;) {
    }
}