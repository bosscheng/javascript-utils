var isPlainObject = function (value) {
    if (!isObject(value) || value.nodeType || isWindow(value)) {
        return false;
    }

    if (value.constructor && value.hasOwnProperty.call(value.constructor.prototype, "isPrototypeOf")) {
        return false;
    }

    return true;
};

var isMatch = function (obj, attrs) {
    const _keys = Object.keys(attrs);
    const length = _keys.length;
    if (!obj) {
        return false;
    }
    for (let i = 0; i < length; i++) {
        const key = _keys[i];
        if (attrs[key] !== obj[key] || (!key in obj)) {
            return false;
        }
    }

    return true;
};

// find
function find(arr, predicate) {
    let _predicate;
    if (typeof predicate === 'function') {
        _predicate = predicate;
    }

    if (isPlainObject(predicate)) {
        _predicate = a => isMatch(a, predicate);
    }

    if (_predicate) {
        for (let i = 0; i < arr.length; i += 1) {
            if (_predicate(arr[i])) {
                return arr[i];
            }
        }
    }
    return null;

}
