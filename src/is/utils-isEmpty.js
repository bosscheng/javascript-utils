/**
 * Date:2020/9/14
 * Desc:
 */

function isEmpty(value) {
    return value === null || value === undefined
}

function isEmpty2(value) {
    return (typeof value === "string" && value.trim() === '') || isEmpty(value);
}


function isEmpty3(o) {
    for (var i in o) {
        if (o.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}