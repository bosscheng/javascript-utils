/**
 * Wraps one function with another, creating a placeholder for the
 * wrapped function if it was null. this is used to wrap the various
 * drag/drop event functions - to allow jsPlumb to be notified of
 * important lifecycle events without imposing itself on the user's
 * drag/drop functionality.
 * @method jsPlumbUtil.wrap
 * @param {Function} wrappedFunction original function to wrap; may be null.
 * @param {Function} newFunction function to wrap the original with.
 * @param {Object} [returnOnThisValue] Optional. Indicates that the wrappedFunction should
 * not be executed if the newFunction returns a value matching 'returnOnThisValue'.
 * note that this is a simple comparison and only works for primitives right now.
 */
function wrap(wrappedFunction, newFunction, returnOnThisValue) {
    return function () {
        var r = null;
        try {
            if (newFunction != null) {
                r = newFunction.apply(this, arguments);
            }
        } catch (e) {
        }
        if ((wrappedFunction != null) && (returnOnThisValue == null || (r !== returnOnThisValue))) {
            try {
                r = wrappedFunction.apply(this, arguments);
            } catch (e) {
            }
        }
        return r;
    };
}