function queryStringify(params) {
    if (!params) {
        return;
    }

    return Object.entries(params).reduce((acc, entry, index) => {
        const [key, value] = entry;
        const encoded = index === 0 ? key + '=' + encodeURIComponent(value) : '&' + key + '=' + encodeURIComponent(value)
        return acc + encoded;
    }, '');
}