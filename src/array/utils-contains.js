const indexOf = Array.prototype.indexOf;

function contains(arr, value) {

    if (!Array.isArray(arr)) {
        return false;
    }

    return indexOf.call(arr, value) > -1;

}
