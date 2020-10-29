/**
 * Date:2020/10/29
 * Desc:
 */
var isArrayLike2 = function (value) {
    return value !== null && typeof value !== "function" && isFinite(value.length);
};
