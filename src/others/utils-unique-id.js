/*
* date: 2019-08-04
* desc:
*/
const uniqueId = (function () {
    const map = {};

    return function (prefix = 'g') {
        if (!map[prefix]) {
            map[prefix] = 1;
        } else {
            map[prefix] += 1;
        }

        return prefix + map[prefix];
    };
})();


/*
 * 随机数时间戳
 * */
var uniqueId = function () {
    var a = Math.random;
    var b = parseInt;
    return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());
};
