//
var flattenDeep = function (arr, result = []) {
    if (!Array.isArray(arr)) {
        result.push(arr);
    } else {
        arr.forEach((item) => {
            flattenDeep(item, result);
        });
    }

    return result;
};
