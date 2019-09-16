/*
* date: 2019-09-16
* desc: merge an array of objects into a single object
*/

function _extend(to, _from) {
    for (const key in _from) {
        to[key] = _from[key];
    }
    return to;
}

function toObject(arr) {
    const res = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            _extend(res, arr[i]);
        }
    }
    return res;
}
