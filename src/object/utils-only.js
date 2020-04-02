/*
* date: 2019-06-27
* @params obj Object
* @params keys Array | string
* desc:
*/
function only(obj, keys) {
    obj = obj || {};
    // 这种写法 ，吊炸天 无限空格。
    if ('string' == typeof keys) keys = keys.split(/ +/);
    return keys.reduce(function (ret, key) {
        if (null == obj[key]) return ret;
        ret[key] = obj[key];
        return ret;
    }, {});
}
