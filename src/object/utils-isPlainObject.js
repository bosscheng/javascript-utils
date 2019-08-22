/*
* date: 2019-08-21
* desc:
*/
// 对于 plain object
// any object or value whose internal [[class]] property is not "[object object]"
// DOM nodes
// window
var isPlainObject = function (value) {
    if (!isObject(value) || value.nodeType || isWindow(value)) {
        return false;
    }

    if (value.constructor && value.hasOwnProperty.call(value.constructor.prototype, "isPrototypeOf")) {
        return false;
    }

    return true;
};



var isPlainObject2 = function (object) {
    if (!object || !isObject(object) || object.nodeType || isWindow(object)) {
        return false;
    }

    try {
        // constructor 必须是一个对象
        if (object.constructor && hasOwn.call(object, " ") && !hasOwn.call(object.constructor.prototype, "isPrototypeOf")) {
            return false;
        }
    } catch (e) {
        //  IE8,IE9 会在某些主体对象上抛异常
        return false;
    }

    var key;
    // Support: IE<9
    // Handle iteration over inherited properties before own properties.
    // http://bugs.jquery.com/ticket/12199
    if (iteratesOwnLast) {
        for (key in object) {
            return hasOwn.call(object, key);
        }
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.
    for (key in object) {
    }
    return key === undefined || hasOwn.call(object, key);
};

