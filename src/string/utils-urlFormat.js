/*
* date: 2019-08-29
* desc:
*/
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
