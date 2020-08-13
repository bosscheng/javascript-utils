/**
 * Date: 8/13/20
 */


var indexOf = Array.prototype.indexOf;

//
function contains2(arr, value) {
    if (!Array.isArray(arr)) {
        return false;
    }

    return indexOf.call(arr, value) > -1;
}
