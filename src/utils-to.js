/*
* author: wancheng
* date: 2018-12-27
* desc:
*/


/*
* convert an array-like object to a real array
*
* @param {Array-like} list
* @param {Number} [start] - start index
* @return {Array}
* */
function toArray(list, start) {
    start = start || 0;
    var i = list.length - start;
    var ret = new Array(i);
    while (i--) {
        ret[i] = list[i + start];
    }
    return ret;
}



function toBoolean(value) {
    return value === 'true' ? true : value === 'false' ? false : value
}


function toNumber(value) {
    if (typeof value !== 'string') {
        return value;
    }
    else {
        // 转换成 number 类型
        var parsed = Number(value);
        return isNaN(parsed) ? value : parsed
    }
}


function toString(value) {
    return value == null ? '' : value;
}

