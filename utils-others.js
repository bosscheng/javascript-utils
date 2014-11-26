/**
 * javascript algorithm
 * Author: bosscheng
 * Data: 14-11-27
 */


var org = org || {};

org.util = org.util || {};

;
(function (util) {
    /*
     * 判断是否以某一个字符串开头的
     * */
    util.startWith = function (str, s) {
        return str.indexOf(s) === 0;
    };
    /*
     * 判断是否以某一个字符串结束的
     * */
    util.endWith = function (str, s) {
        var leng = str.length - s.length;
        return (leng >= 0 && str.lastIndexOf(s) === leng);
    }

    /*
     * 转义 html 标签
     * */
    util.htmlEncode = function (text) {
        return text.replace(/&/g, '&').replace(/\"/g, '"').replace(/</g, '<').replace(/>/g, '>');
    }

    /*
     * 反转义 html 标签
     * */
    util.htmlDecode = function (text) {
        return;
    }


    /*
     *  时间日期格式转换
     * */
    util.Format = function (formatStr) {
        var date = new Date();
        var str = formatStr;
        var Week = ['日', '一', '二', '三', '四', '五', '六'];
        str = str.replace(/yyyy|YYYY/, date.getFullYear());
        str = str.replace(/yy|YY/, (date.getYear() % 100) > 9 ? (date.getYear() % 100).toString() : '0' + (date.getYear() % 100));
        str = str.replace(/MM/, (date.getMonth() + 1) > 9 ? (date.getMonth() + 1).toString() : '0' + (date.getMonth() + 1));
        str = str.replace(/M/g, (date.getMonth() + 1));
        str = str.replace(/w|W/g, Week[date.getDay()]);
        str = str.replace(/dd|DD/, date.getDate() > 9 ? date.getDate().toString() : '0' + date.getDate());
        str = str.replace(/d|D/g, date.getDate());
        str = str.replace(/hh|HH/, date.getHours() > 9 ? date.getHours().toString() : '0' + date.getHours());
        str = str.replace(/h|H/g, date.getHours());
        str = str.replace(/mm/, date.getMinutes() > 9 ? date.getMinutes().toString() : '0' + date.getMinutes());
        str = str.replace(/m/g, date.getMinutes());
        str = str.replace(/ss|SS/, date.getSeconds() > 9 ? date.getSeconds().toString() : '0' + date.getSeconds());
        str = str.replace(/s|S/g, date.getSeconds());
        return str
    }

    /*
     * 是否为数字类型
     * */
    util.isDigit = function (value) {
        var patrn = /^[0-9]*$/;
        if (patrn.exec(value) === null || value === "") {
            return false
        } else {
            return true
        }
    }

    /*
     * 设置 cookie
     * */
    util.setCookie = function (name, value, Hours, domain) {
        var d = new Date();
        var offset = 8;
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        var nd = utc + (3600000 * offset);
        var exp = new Date(nd);
        exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000);
        document.cookie = name + "=" + escape(value) + ";path=/;expires=" + exp.toGMTString() + ";domain=" + domain
            + ";"
    }

    /*
     * 获取cookies
     * */
    util.getCooke = function (name) {
        var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
        if (arr != null) return unescape(arr[2]);
        return null
    }
    /*
     * 检查url是否有效
     * */
    util.getUrlState = function (url) {
        // 需要换成兼容性的写法
        var xmlhttp = new ActiveXObject("microsoft.xmlhttp");
        xmlhttp.Open("GET", url, false);
        try {
            xmlhttp.Send();
        } catch (e) {

        } finally {
            var result = xmlhttp.responseText;
            if (result) {
                if (xmlhttp.Status == 200) {
                    return(true);
                } else {
                    return(false);
                }
            } else {
                return(false);
            }
        }
    }


    // 待续


})(org.util);

