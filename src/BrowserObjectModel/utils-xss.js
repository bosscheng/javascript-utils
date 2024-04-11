/**
 * encode
 * @param str
 * @returns {string|*}
 */
function xssEncode(str) {
    var _str = str;

    if (!_str) {
        return _str;
    }

    if (Object.prototype.toString.call(_str) !== '[object String]') {
        _str = String(str);
    }

    return _str.replace(/&/g, '&amp;')
        .replace(/>/g, '&gt;')
        .replace(/</g, '&lt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/\s/g, '&nbsp;');
}

/**
 * decode
 * @param str
 * @returns {string|*}
 */
function xssDecode(str) {
    var _str = str;

    if (!_str) {
        return _str;
    }

    if (Object.prototype.toString.call(_str) !== '[object String]') {
        _str = String(str);
    }

    return _str.replace(/&amp;?/g, '&').replace(/&gt;?/g, '>').replace(/&lt;?/g, '<').replace(/&quot;?/g, '"').replace(/&#39;?/g, '\'').replace(/&nbsp;?/g, ' ');
}
