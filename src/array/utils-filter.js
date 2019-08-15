function filter(array, fn) {
    array = array || [];
    var result = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var item = array[i];
        if (fn(item)) {
            result.push(item);
        }
    }
    return result;
}
