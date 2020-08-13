function isNumber(value) {
    return Object.prototype.toString.call(value) === '[object Number]';
}

function isDate(value) {
    return Object.prototype.toString.call(value) === '[object Date]';
}

function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}

function isFunction(value) {
    return typeof value === 'function';
}

function equals(o1, o2) {
    var t1 = typeof o1;

    var t2 = typeof o2;

    var length;

    var key;

    var keySet = {};

    if (o1 === null || o2 === null) {
        return false;
    }

    if (o1 === o2) {
        return true;
    }

    if (t1 === t2 && t1 === 'object') {
        // 数组
        if (Array.isArray(o1)) {
            if (!Array.isArray(o2)) {
                return false;
            }

            // 数组对象遍历比较
            if ((length = o1.length) === o2.length) {
                for (key = 0; key < length; key++) {
                    if (!equals(o1[key], o2[key])) {
                        return false;
                    }
                }
                return true;
            }
        }
        // 日期
        else if (isDate(o1)) {
            if (!isDate(o2)) {
                return false;
            }

            // 时间戳相同则算相等
            return equals(o1.getTime(), o2.getTime());
        }
        // 正则
        else if (isRegExp(o1)) {
            if (!isRegExp(o2)) {
                return false;
            }

            return o1.toString() === o2.toString();
        }
        // 对象
        else {
            // 先遍历o1，function不比较，略过
            for (key in o1) {
                if (isFunction(o1[key])) {
                    continue;
                }

                if (!equals(o1[key], o2[key])) {
                    return false;
                }

                keySet[key] = true;
            }

            // 再遍历o2，如果o2没有多余的属性，则算相等
            for (key in o2) {
                if (!keySet.hasOwnProperty(key) && o2[key] !== undefined && !isFunction(o2[key])) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}


/**
 *
 * @param array
 * @param obj
 * @param arrayProperty
 * @param objProperty
 * @returns {boolean}
 */
function contains(array, obj, arrayProperty, objProperty) {
    var i = 0;

    var length;

    // 特殊情况，比较对象的某一个属性
    if (arrayProperty && objProperty) {
        for (length = array.length; i < length; i++) {
            if (array[i][arrayProperty] === obj[objProperty]) {
                return true;
            }
        }
    }
    // 一般的包含
    else {
        for (length = array.length; i < length; i++) {
            if (equals(array[i], obj)) {
                return true;
            }
        }
    }

    return false;
}

