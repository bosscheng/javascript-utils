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


function toString3(value) {
    const nativeToString = Object.prototype.toString;

    function isErrorLike(error) {
        switch (nativeToString.call(error)) {
            case '[object Error]':
                return true;
            case '[object Exception]':
                return true;
            case '[object DOMException]':
                return true;
            default:
                try {
                    return error instanceof Error;
                } catch (e) {
                    return false;
                }
        }
    }

    if (isErrorLike(value)) {
        return value.toString();
    }

    return value == null
        ? '' :
        typeof value === 'object'
            ? JSON.stringify(value, null, 2)
            : String(value)
}