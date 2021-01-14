/**
 * Date:2021/1/14
 * Desc: 格式化宽带速度：${speed} 是 Bytes
 */
function formatBandwidth (speed) {
    if (!speed) {
        return '0 KB/s'
    }
    if (speed / 1024 / 1024 < 1) {
        return (speed / 1024).toFixed(2) + ' KB/s'
    } else {
        return (speed / 1024 / 1024).toFixed(2) + ' MB/s'
    }
}
