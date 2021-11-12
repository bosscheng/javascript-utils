/**
 * 返回两个日期{start}和{end}之间的差异 (以天为值)。 计算Date对象之间的差异 (以天为)。
 */
function utilsGetDaysDiffBetweenDates(start, end) {
    return Math.ceil((Math.abs(start - end)) / (1000 * 3600 * 24));
}