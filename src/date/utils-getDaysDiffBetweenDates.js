/**
 * 返回两个日期之间的差异 (以天为值)。 计算Date对象之间的差异 (以天为)。
 */
function utilsGetDaysDiffBetweenDates(start, end) {
    return (start - end) / (1000 * 3600 * 24);
}