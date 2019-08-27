/*
* date: 2019-08-27
* desc:
*/
function clone(obj) {
    var result = '';
    //
    if (typeof obj === 'object') {
        result = JSON.stringify(obj);
        result = JSON.parse(result);
    } else {
        result = obj;
    }

    return result;
}
