/**
 * 验证有0-3位小数的正实数
 * @param value
 * @returns {boolean}
 */
function isNumbersWithDecimals(value) {
    return /^[0-9]+(.[0-9]{1,3})?$/.test(value)
}

console.log(isNumbersWithDecimals(1));

/**
 * 验证有0-2位小数的正实数
 * @param value
 */
function isNumbersWithDecimals$2(value) {
    return /^[0-9]+(.[0-9]{1,2})?$/.test(value)
}

/**
 * 验证有0-1位小数的正实数
 * @param value
 * @returns {boolean}
 */
function isNumbersWithDecimals$3(value){
    return /^[0-9]+(.[0-9])?$/.test(value)
}

