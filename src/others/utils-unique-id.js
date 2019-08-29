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
