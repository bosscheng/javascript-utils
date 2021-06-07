//
function isEmptyAll(value) {
    // array || string
    if (Array.isArray(value) || typeof value === "string") {
        return value.length === 0;
    }
    // map || set
    if (value instanceof Map || value instanceof Set) {
        return value.size === 0;
    }
    // object
    if (value !== null && typeof value === 'object') {
        return Object.keys(value).length === 0;
    }

    return false;
}