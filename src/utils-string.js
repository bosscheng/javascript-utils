/*
* author: wancheng
* date: 2018-12-25
* desc:
*/

/**
 * @desc
 *
 * @param str
 * @returns {void | string | never}
 */
function format(str) {
    var _slice = Array.prototype.slice;
    var values = _slice.call(arguments, 1);

    return str.replace(/{(\d+)}/g, function (match, number) {
        return typeof values[number] !== 'undefined' ? values[number].toString() : match;
    })
}

/**
 *
 * @param str
 * @returns {string}
 */
function urlFormat(str) {
    var _slice = Array.prototype.slice;
    var values = _slice.call(arguments, 1);
    var parameter = "";

    for (var i = 0, len = values.length; i < len; i++) {
        var _value = values[i];
        for (var prop in _value) {
            parameter += prop + '=' + encodeURIComponent(_value[prop]) + "&";
        }
    }

    return (str + '?' + parameter).substr(0, (str + '?' + parameter).length - 1);
}
