/**
 * Date:2020/9/14
 * Desc: tofixed${num}小数点,默认${numFixed}。
 */

function rateNum(num, numFixed) {
    if (num === undefined || numFixed === null) {
        return num;
    }
    let _rate = parseFloat(num);
    if (isNaN(_rate)) {
        return num;
    }
    numFixed = (numFixed === null || numFixed === undefined) ? 2 : numFixed;
    let result = (_rate * 100);
    return ('' + result).indexOf('.') !== -1 ? result.toFixed(numFixed) : result;
}
