function getQueryUrl(url, query) {
    const queryArr = []
    Object.keys(query).forEach((k) => {
        queryArr.push(`${k}=${query[k]}`)
    })
    if (url.indexOf('?') !== -1) {
        url = `${url}&${queryArr.join('&')}`
    } else {
        url = `${url}?${queryArr.join('&')}`
    }
    return url
}