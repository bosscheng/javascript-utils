function utilsSetStyle(ele, key, value) {
    if (typeof key === 'object') {
        Object.keys(key).forEach(item => {
            utilsSetStyle(ele, item, key[item]);
        });
    }
    ele.style[key] = value;
    return ele;
}