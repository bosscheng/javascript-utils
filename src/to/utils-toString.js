/*
* date: 2019-08-29
* desc:
*/

function toString(value) {
    return value == null ? '' : '' + value;
}

// to string
function toString2(value) {
    return value == null
        ? '' :
        typeof value === 'object'
            ? JSON.stringify(value, null, 2)
            : String(value)
}
