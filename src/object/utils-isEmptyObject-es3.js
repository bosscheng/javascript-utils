/*
* date: 2019-08-21
* desc:
*/
// is empty object
var isEmptyObject = function (value) {
    var name;
    for (name in value) {
        if (value.hasOwnProperty(name)) {
            return false;
        }
    }
    return true;
};


/**
 * 是否是空的对象
 * */
var isEmptyObject2 = function (object) {
    // 如果转化为boolean 为 false
    // 如果不是Object类型
    // 如果是浏览器元素
    // 如果是window元素
    // 如果没有hasOwnProperty 属性
    if (!object || !isObject(object) || object.nodeType || isWindow(object) || !object.hasOwnProperty) {
        return false;
    }

    // 遍历 object对象，如果存在 属性的话，直接返回false
    for (var p in object) {
        // 遍历属性值
        if (object.hasOwnProperty(p)) {
            return false;
        }
    }
    return true;
};
