var forbidBackSpace = function () {
    document.onkeyup = _forbidBackSpace;

    // xxx
    function isString(str) {

    }

    // xxx
    function isUndefined() {

    }

    // xxx
    function indexOf(array, item) {

    }

    function _forbidBackSpace(e) {
        var event = getEvent(e);
        var target = getTarget(e);
        var type = getType(e);
        if (event.keyCode === 8) {
            // support html5
            var inputTypes = ['password', 'text', 'textarea', 'number', 'email', 'date', 'datetime', 'datetime-local', 'month', 'time', 'url', 'week', 'tel'];

            type = isString(type) ? type.toLowerCase() : type;

            var readOnly = getAttribute(target, 'readOnly');
            var disabled = getAttribute(target, 'disabled');

            readOnly = isUndefined(readOnly) ? false : readOnly;
            disabled = isUndefined(disabled) ? false : disabled;

            var isInputType = indexOf(inputTypes, type) !== -1;
            var isReadOnlyOrDisabled = readOnly === true || disabled === true;

            var enableOne = isInputType && isReadOnlyOrDisabled;
            var enableTwo = !isInputType;
            if (enableOne || enableTwo) {
                return false;
            }
        }
        return true;
    }
};
