/*
* date: 2019-08-29
* desc:
*/
/**
 * @doc function
 * @name var random
 *
 * */
var random = function (min, max) {
    // null === max
    if (isNull(max)) {
        max = min;
        min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
};


// 获取 max - min
const getRandom = (min = 0, max = 100) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
