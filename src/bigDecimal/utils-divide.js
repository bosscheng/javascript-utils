/**
 * 迭代操作
 */
function _iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);

    others.forEach((num) => {
        res = operation(res, num);
    });

    return res;
}


/**
 * 检测数字是否越界，如果越界给出提示
 * @param {*number} num 输入数
 */
function _checkBoundary(num) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        console.warn(`${num} is beyond boundary when transfer to integer, the results may not be accurate`);
    }
}


/**
 * Return digits length of a number
 * @param {*number} num Input number
 */
function _digitLength(num) {
    // Get digit length of e
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
}


/**
 * 把错误的数据转正
 * strip(0.09999999999999998)=0.1
 */
function _strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
}

/**
 * 精确乘法
 */
function _times(...nums) {
    if (nums.length > 2) {
        return _iteratorOperation(nums, times);
    }

    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = _digitLength(num1) + _digitLength(num2);
    const leftValue = num1Changed * num2Changed;

    _checkBoundary(leftValue);

    return leftValue / Math.pow(10, baseNum);
}



/**
 * 精确除法
 */
function divide(...nums) {
    if (nums.length > 2) {
        return _iteratorOperation(nums, divide);
    }

    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    // fix: 类似 10 ** -4 为 0.00009999999999999999，strip 修正
    return _times(num1Changed / num2Changed, _strip(Math.pow(10, _digitLength(num2) - _digitLength(num1))));
}
