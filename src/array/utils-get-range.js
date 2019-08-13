// 获取数组最大，最小值。
function getRange(values) {
    const max = Math.max.apply(null, values);
    const min = Math.min.apply(null, values);

    return {
        min,
        max
    };
}
