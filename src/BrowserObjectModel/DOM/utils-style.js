function setStyle(element, key, value) {
    element.style[key] = value;
    return element;
}

function setStyles(element, styles) {
    Object.keys(styles).forEach((key) => {
        setStyle(element, key, styles[key]);
    });
    return element;
}

function getStyle(element, key, numberType = true) {
    const value = window.getComputedStyle(element, null).getPropertyValue(key);
    return numberType ? parseFloat(value) : value;
}