/**
 * 移除url的前缀。
 * @param url
 * @returns {*}
 */
function utilsRemoveURLPrefix(url){
    return url.replace(/(^\w+:|^)\/\//, "");
}

// removeURLPrefix("https://www.xxx.com");