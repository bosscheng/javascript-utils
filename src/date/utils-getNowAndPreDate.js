/**
 * 获取 获取前${days}天
 * @param days
 * @returns {{pre: number, now: number}}
 */
function getNowAndPreDate(days) {
    days = parseInt(days, 10) || 0;
    const now = (new Date()).getTime();
    const pre = now - 3600 * 1000 * 24 * days;
    return {
        now,
        pre
    };
}
