// 浅拷贝
function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}


// 深拷贝
function deepCopy(obj) {
    var result;
    if (typeof obj === 'object') {
        result = obj.constructor === Array ? [] : {};

        for (var i in obj) {
            result[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
        }
    } else {
        result = obj;
    }

    return result;
}
