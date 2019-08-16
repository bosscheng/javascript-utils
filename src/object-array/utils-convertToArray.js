
/*
将参数格式化成array对象。
*/
var convertToArray = function (options) {
    if (isString(options)) {
        try {
            return JSON.parse(options);
        } catch (e) {
            throw e;
        }
    }
    if (isArray(options)) {
        return options;
    }

    if (isUndefined(options) || options === null) {
        return [];
    }

    if (options instanceof Object) {
        return [options];
    }
    throw "Conversion Error " + options + ",typeof " + (typeof options);
};
