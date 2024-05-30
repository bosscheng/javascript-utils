/**
 * sleep 堵塞 ${time} ms
 * @param time
 */
function sleep(time) {
    let _now = Date.now();
    for (; Date.now() - _now <= time;) {
    }
}

/**
 *
 * @param duration 单位 ms
 * @returns {Promise<Promise<unknown> | Promise>}
 */
const sleep$2 = async (duration) => (
    new Promise(resolve =>
        setTimeout(resolve, duration)
    )
);
