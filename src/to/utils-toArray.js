/*
* date: 2019-08-29
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
