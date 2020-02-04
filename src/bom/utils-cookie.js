/*
* date: 2020-02-04
* desc:
*/
/*
 * 设置 cookie
 * */
var setCookie = function (name, value, Hours, domain) {
    var d = new Date();
    var offset = 8;
    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    var nd = utc + (3600000 * offset);
    var exp = new Date(nd);
    exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
    document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=" + domain
        + ";"
};


/*
 * 获取cookies
 * */
var getCooke = function (name) {
    var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
    if (arr != null) return unescape(arr[2]);
    return null
}


var removeCookie = function (name) {
    // 设置已过期，系统会立即删除cookie。
    setCookie(name, '1', -1);
};
