var _isFunction = function (value) {
    return typeof value === 'function';
};

function isNamedFunction(o) {
    return _isFunction(o) && o.name != null && o.name.length > 0
}