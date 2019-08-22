/*
* date: 2019-08-21
* desc:
*/
/**
 *
 * @param url
 * @returns {boolean}
 */
var isAbsoluteURL = function (url) {
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};
