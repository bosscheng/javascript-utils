// 只 扁平化一层数组结构。
var flatten = function (arr) {
    if (!Array.isArray(arr)) {
        return arr;
    }

    let result = [];
    result.forEach((item) => {

        if (Array.isArray(item)) {
            item.forEach((subItem) => {
                result.push(subItem);
            });
        } else {
            result.push(item);
        }
    });

    return result;
};
