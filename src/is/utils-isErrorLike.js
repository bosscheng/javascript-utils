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