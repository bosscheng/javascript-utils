function maxBy(arr, fn) {
    if (!Array.isArray(arr)) {
        return undefined;
    }
    let max = arr[0];
    let maxData;
    if (typeof fn === 'function') {
        maxData = fn(max);
    } else {
        maxData = arr[0][fn];
    }
}
