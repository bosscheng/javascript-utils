/*
* date: 2019-07-23
* desc:
*/
function getQueryString(name, url) {
    var search = window.location.search;
    var qArr = '';
    var key = {};

    if (url) {
        qArr = url.split("?")[1].split("&");

    } else {
        if (!window.location.search) {
            return;
        }
        qArr = search.substr(1).split("&");
    }

    for (var i = 0; i < qArr.length; i++) {

        var firstPos = qArr[i].indexOf('=');
        key[qArr[i].slice(0, firstPos)] = qArr[i].slice(firstPos + 1);
    }

    if (name) {
        return key[name];
    } else {
        if (url) {
            return key[name];
        } else {
            return key;
        }
    }
}
