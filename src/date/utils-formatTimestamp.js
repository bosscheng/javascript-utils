/**
 * Date:2020/12/24
 * Desc: 将 ${timestamp} 转义成 xx天xx时xx分xx秒
 */

function formatTimestamp(timestamp) {
    let d = 0,
        h = 0,
        m = 0,
        s = 0;
    if (timestamp > 0) {
        d = Math.floor(timestamp / 1000 / 3600 / 24)
        h = Math.floor(timestamp / 1000 / 60 / 60 % 24)
        m = Math.floor(timestamp / 1000 / 60 % 60)
        s = Math.floor(timestamp / 1000 % 60)
    }

    return `${d}天${h}时${m}分${s}秒`
}
