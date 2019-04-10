function find(array, fn) {
    array = array || [];
    var result = null;
    for (var i = 0, len = array.length; i < len; i++) {
        var item = array[i];
        if (fn(item)) {
            result = item;
            break;
        }
    }
    return result;
}
