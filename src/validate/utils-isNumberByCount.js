/**
 * 验证n位的数字 ^\d{n}$
 * @param value
 * @param count
 * @returns {boolean}
 */
function utilsIsNumberByCount(value,count){
    return /^\d{2}$/.test(value)
}

// 例如 验证2位
console.log(utilsIsNumberByCount(1,2))