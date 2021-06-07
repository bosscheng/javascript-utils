function isElement(value) {
    return value !== null && typeof value === 'object' && !!value.tagName
}