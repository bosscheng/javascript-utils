//
var hasOwnProperty = Object.prototype.hasOwnProperty;

var shallowProperty = function (key) {
    return function (obj) {
        return obj == null ? void 0 : obj[key];
    };
};

var deepGet = function (obj, path) {
    var length = path.length;

    for (var i = 0; i < length; i++) {
        if (obj == null) return void 0;
        obj = obj[path[i]];
    }

    return length ? obj : void 0;
};

var identity = function (value) {
    return value;
};

var optimizeCb = function (func, context, argCount) {
    if (context === void 0) return func;

    switch (argCount) {
        case 1:
            return function (value) {
                return func.call(context, value);
            };
        // The 2-parameter case has been omitted only because no current consumers
        // made use of it.

        case null:
        case 3:
            return function (value, index, collection) {
                return func.call(context, value, index, collection);
            };

        case 4:
            return function (accumulator, value, index, collection) {
                return func.call(
                    context,
                    accumulator,
                    value,
                    index,
                    collection
                );
            };
    }

    return function () {
        return func.apply(context, arguments);
    };
};

var property = function (path) {
    if (!Array.isArray(path)) {
        return shallowProperty(path);
    }

    return function (obj) {
        return deepGet(obj, path);
    };
};

function isFunction(x) {
    return Object.prototype.toString.call(x) === "[object Function]";
}

function isUndefined(obj) {
    return obj === void 0;
}

function isObject(obj) {
    var type = typeof obj;
    return type === "function" || (type === "object" && !!obj);
}

function isMatch(object, attrs) {
    var keys = Object.keys(attrs),
        length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);

    for (var i = 0; i < length; i++) {
        var key = keys[i];
        if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }

    return true;
}

var matcher = function (attrs) {
    return function (obj) {
        return isMatch(obj, attrs);
    };
};

var builtinIteratee;

var cb = function (value, context, argCount) {
    if (iteratee !== builtinIteratee) return iteratee(value, context);
    if (value == null) return identity;
    if (isFunction(value)) return optimizeCb(value, context, argCount);
    if (isObject(value) && !Array.isArray(value)) return matcher(value);
    return property(value);
};

var iteratee = (builtinIteratee = function (value, context) {
    return cb(value, context, Infinity);
});

var getLength = shallowProperty("length");
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

var isArrayLike = function (collection) {
    var length = getLength(collection);
    return (
        typeof length == "number" && length >= 0 && length <= MAX_ARRAY_INDEX
    );
};

var each = function (obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;

    if (isArrayLike(obj)) {
        for (i = 0, length = obj.length; i < length; i++) {
            iteratee(obj[i], i, obj);
        }
    } else {
        var keys = Object.keys(obj);

        for (i = 0, length = keys.length; i < length; i++) {
            iteratee(obj[keys[i]], keys[i], obj);
        }
    }

    return obj;
};

var group = function (behavior, partition) {
    return function (obj, iteratee, context) {
        var result = partition ? [[], []] : {};
        iteratee = cb(iteratee, context);
        each(obj, function (value, index) {
            var key = iteratee(value, index, obj);
            behavior(result, value, key);
        });
        return result;
    };
};

var has = function (obj, path) {
    if (!Array.isArray(path)) {
        return obj != null && hasOwnProperty.call(obj, path);
    }

    var length = path.length;

    for (var i = 0; i < length; i++) {
        var key = path[i];

        if (obj == null || !hasOwnProperty.call(obj, key)) {
            return false;
        }

        obj = obj[key];
    }

    return !!length;
};

function groupBy() {
    return group(function (result, value, key) {
        if (has(result, key)) result[key].push(value);
        else result[key] = [value];
    });
}
