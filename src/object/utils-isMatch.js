/*
* date: 2019-08-22
* desc:
*/
// 表示 attrs 拥有的属性，是否obj 也拥有，且值相等。
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
