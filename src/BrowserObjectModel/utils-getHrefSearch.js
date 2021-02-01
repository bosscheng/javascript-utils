/*
* date: 2019-08-29
* desc:
*/
/*
 * 获取url中的get参数
 * */
var getSearch = function () {
    // 分割
    var queryStr = window.location.href.split('?');
    var gets = [];
    var getArr = [];
    var tempArr;
    var key;
    if (queryStr[1]) {
        gets = queryStr[1].split('&');
        for (var i = 0; i < gets.length; i++) {
            tempArr = gets[i].split("=");
            key = tempArr[0];
            getArr[key] = tempArr[1];
        }
    }

    return getArr;
};


/**
 * 获取url中的get参数
 *
 * */
var getSearch2 = function () {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = {};
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};

/**
 * 获取url中的get参数
 *
 * */
var getSearch3 = function () {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

    var r = window.location.search.substr(1).match(reg);

    if (r != null) {
        return unescape(r[2]);
    }
    return null;
};

var getSearch4 = function () {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = {};
    if (url.indexOf("?") !== -1) {
        var str = url.substr(1);
        var strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
};
