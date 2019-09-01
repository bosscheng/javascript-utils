/*
* date: 2019-08-31
* desc:
*/
function _uniq(arr) {
    const result = [];
    arr.forEach((item) => {
        if (arr.indexOf(item) === -1) {
            result.push(item);
        }
    });
    return result;
}

function union() {
    let result = [];
    let sources = Array.prototype.slice.call(arguments);
    sources.forEach((arr) => {
        result = result.concat(arr);
    });
    return _uniq(result);
}
