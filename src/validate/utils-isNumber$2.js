/**
 * 验证大于等于0的整数
 * @param value
 * @returns {boolean}
 */
function utilsIsNumber2(value) {
    return /^[0-9]*$/.test(value)
}

function utilsIsNumber$2(value) {
    return /^[1-9]\d*$|^0$/.test(value)
}


// console.log(utilsIsNumber2(0))

// console.log(utilsIsNumber$2(1))