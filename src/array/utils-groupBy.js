//
function groupBy(array, key) {
    array = array || [];
    var result = {};
    for (var i = 0, len = array.length; i < len; i++) {
        var item = array[i];
        var value = item[key];
        //
        if (!result[value]) {
            result[value] = [];
        }
        //
        result[value].push(item);
    }

    return result;
}
