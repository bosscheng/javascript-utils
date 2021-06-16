/**
 * @desc
 * 和JavaScript中其他可用的时间类函数（比如Date.now）不同的是，
 * window.performance.now()返回的时间戳没有被限制在一毫秒的精确度内，
 * 相反，它们以浮点数的形式表示时间，精度最高可达微秒级。
 * 另外一个不同点是，window.performance.now()是以一个恒定的速率慢慢增加的，它不会受到系统时间的影响（系统时钟可能会被手动调整或被NTP等软件篡改）。
 * 另外，performance.timing.navigationStart + performance.now() 约等于 Date.now()。
 * @returns {number}
 */
function utilsGetNowTimestamp(){
    //
    if (performance && typeof performance.now === 'function') {
        return performance.now();
    }
    return Date.now();
}