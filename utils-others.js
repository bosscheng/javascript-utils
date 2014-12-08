/**
 * javascript others 杂类
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
     *  当前时间日期格式转换
     * */
    util.currTimeFormat = function (formatStr) {
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
    };

    /*
     * 时间格式化
     * @param time Date
     * @param format   例如 yyyy-MM-dd hh:mm:ss
     * */
    util.timeFormatTwo = function (time, format) {
        var o = {
            "M+": time.getMonth() + 1, //month
            "d+": time.getDate(),    //day
            "h+": time.getHours(),   //hour
            "m+": time.getMinutes(), //minute
            "s+": time.getSeconds(), //second
            "q+": Math.floor((time.getMonth() + 3) / 3),  //quarter
            "S": time.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
            (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
        return format;
    }


    /*
     1、< 60s, 显示为“刚刚”
     2、>= 1min && < 60 min, 显示与当前时间差“XX分钟前”
     3、>= 60min && < 1day, 显示与当前时间差“今天 XX:XX”
     4、>= 1day && < 1year, 显示日期“XX月XX日 XX:XX”
     5、>= 1year, 显示具体日期“XXXX年XX月XX日 XX:XX”
     * */
    util.timeFormat = function (time) {
        var date = new Date(time);
        var curDate = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 10;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var curYear = curDate.getFullYear();
        var curHour = curDate.getHours();
        var timeStr;

        if (year < curYear) {
            timeStr = year + "年" + month + '月' + day + '日' + hour + ':' + minute;
        }
        else {
            var pastTime = curDate - date;
            var pastH = pastTime / 3600000;

            if (pastH > curHour) {
                timeStr = month + '月' + day + '日 ' + hour + ':' + minute;
            } else if (pastH >= 1) {
                timeStr = '今天 ' + hour + ':' + minute + '分';
            } else {
                var pastM = curDate.getMinutes() - minute;
                if (pastM > 1) {
                    timeStr = pastM + '分钟前';
                } else {
                    timeStr = '刚刚';
                }
            }

        }

        return timeStr;
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
        //
        var xmlhttp = util.getTransport();

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

    /*
     * 获取传输对象 兼容 w3c 和 IE
     *
     * */
    util.getTransport = function () {
        try {
            try {
                // create XMLHttpRequest object
                // < IE7
                return new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch (e) {
                // > IE7
                return new ActiveXObject('Msxml3.XMLHTTP');
            }
        }
        catch (e) {
            // IE7 and another browser
            return new XMLHttpRequest();
        }
    }

    /*
     * 获取页面中的所有的链接
     * */
    util.getAllUrl = function () {
        return document.documentElement.outerHTML.math(/(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/ig).join("\r\n").replace(/^(src=|href=|url\()[\"\']*|[\"\'\>\) ]*$/igm, "");
    }

    /*
     * 解决 offsetX 兼容性问题
     * */
    util.getOffset = function (e) {
        var target = e.target;
        var eventCoord;
        var pageCoord;
        var offsetCoord;

        // 计算当前触发元素到文档的距离
        pageCoord = getPageCoord(target);

        // 计算光标到文档的距离
        eventCoord = {
            X: window.pageXOffset + e.clientX,
            Y: window.pageYOffset + e.clientY
        };

        // 相减获取光标到第一个定位的父元素的坐标
        offsetCoord = {
            X: eventCoord.X - pageCoord.X,
            Y: eventCoord.Y - pageCoord.Y
        };
        return offsetCoord;
    }

    /*
     *  计算当前触发元素到文档的距离
     * */
    var getPageCoord = util.getPageCoord = function (element) {
        var coord = { X: 0, Y: 0 };
        // 计算从当前触发元素到根节点为止，
        // 各级 offsetParent 元素的 offsetLeft 或 offsetTop 值之和
        while (element) {
            coord.X += element.offsetLeft;
            coord.Y += element.offsetTop;
            element = element.offsetParent;
        }
        return coord;
    }

    /*
     * 获取网页被卷去的位置
     * */
    util.getScrollXY = function () {
        return document.body.scrollTop ? {
            x: document.body.scrollLeft,
            y: document.body.scrollTop
        } : {
            x: document.documentElement.scrollLeft,
            y: document.documentElement.scrollTop
        }
    }

    /*
     * 检查按入的键盘是否有效输入值
     * */
    util.checkKey = function (iKey) {
        if (iKey == 32 || iKey == 229) {
            return true;
        }
        /*空格和异常*/
        if (iKey > 47 && iKey < 58) {
            return true;
        }
        /*数字*/
        if (iKey > 64 && iKey < 91) {
            return true;
        }
        /*字母*/
        if (iKey > 95 && iKey < 108) {
            return true;
        }
        /*数字键盘1*/
        if (iKey > 108 && iKey < 112) {
            return true;
        }
        /*数字键盘2*/
        if (iKey > 185 && iKey < 193) {
            return true;
        }
        /*符号1*/
        if (iKey > 218 && iKey < 223) {
            return true;
        }
        /*符号2*/
        return false;
    }

    /*
     * 随机数时间戳
     * */
    util.uniqueId = function () {
        var a = Math.random;
        var b = parseInt;
        return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());
    }

    /*
     * 获取页面可视高度
     * */
    util.getPageViewHeight = function () {
        var d = document, a = d.compatMode == "BackCompat"
            ? d.body
            : d.documentElement;
        return a.clientHeight;
    }

    /*
     * 获取页面的宽度
     * */
    util.getPageViewWidth = function () {
        var d = document, a = d.compatMode == "BackCompat"
            ? d.body
            : d.documentElement;
        return a.clientWidth;
    }

    /*
     * 获取页面宽度
     * */
    util.getPageWidth = function () {
        var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
            ? a
            : g.documentElement;
        return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
    }

    /*
     * 获取页面的高度
     * */
    util.getPageHeight = function () {
        var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
            ? a
            : g.documentElement;
        return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
    }

    /*
     * 获取到页面scrollTop
     * */
    util.getPageScrollTop = function () {
        var a = document;
        return a.documentElement.scrollTop || a.body.scrollTop;
    }

    util.getPageScrollLeft = function () {
        var a = document;
        return a.documentElement.scrollLeft || a.body.scrollLeft;
    }
    /*
     * 获取当前路径
     * */
    util.getCurrPageUrl = function () {
        var currentPageUrl = "";
        if (typeof this.href === "undefined") {
            currentPageUrl = document.location.toString().toLowerCase();
        } else {
            currentPageUrl = this.href.toString().toLowerCase();
        }
        return currentPageUrl;
    }

    /*
     * $ 检查ID 检索元素对象
     * */
    util.$ = function (id) {
        return  !id ? null : document.getElementById(id);
    }

    /*
     * 设置首页
     * */
    util.setHomePage = function (url) {
        if (document.all) {
            document.body.style.behavior = 'url(#default#homepage)';
            document.body.setHomePage(url)
        } else if (window.sidebar) {
            if (window.netscape) {
                try {
                    netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")
                } catch (e) {
                    alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true")
                }
            }
            var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
            prefs.setCharPref('browser.startup.homepage', url)
        }
    }

    /*
     * 加入收藏夹
     * */
    util.addFavorite = function (sURL, sTitle) {
        try {
            window.external.addFavorite(sURL, sTitle)
        } catch (e) {
            try {
                window.sidebar.addPanel(sTitle, sURL, "")
            } catch (e) {
                alert("加入收藏失败，请使用Ctrl+D进行添加")
            }
        }
    }

    /**
     * @doc function
     * @name util.size
     * @function
     *
     * @description
     *      计算array 中的元素的 个数，或者对象所拥有的属性，或者字符串的长度
     *
     * @param {Object | Array | string}  obj object ,array or string to inspect
     * @param {boolean} [ownPropsOnly = false] count only 'own' properties in an object
     * @return {number} the size of 'obj' or '0' if 'obj' is neither an object nor an array;
     *
     * */
    util.size = function (obj, ownPropsOnly) {
        var count = 0, key;

        if (util.isArray(obj) || util.isString(obj)) {
            return obj.length;
        }

        else if (util.isObject(obj)) {
            for (key in obj) {
                if (!ownPropsOnly || obj.hasOwnProperty(key)) {
                    count++;
                }
            }
        }
        return count;
    }

    /**
     *
     * */
    util.loadJs = function (script_file_url, script_id) {
        var head = document.head || document.getElementByTagName("head")[0] || document.documentElement;
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("src", script_file_url);
        script.setAttribute("id", script_id);
        script.setAttribute("charset", "utf-8");

        var scriptId = document.getElementById(script_id);
        // 如果已经添加了，删除掉。
        if (scriptId) {
            head.removeChild(scriptId);
        }
        head.appendChild(script);

        // IE
        if (window.all) {
            script.onreadystatechange = function () {
                if (script.readyStatus === "loaded" || script.readyState === "complete") {
                    // 执行后续事件
                }
            }
        }
        // W3C
        else {
            script.onload = function () {
                // 执行后续操作。
            }
        }
    }

    /**
     *
     * */
    util.loadCss = function (css_file_url, link_id) {
        var head = document.head || document.getElementByTagName("head")[0] || document.documentElement;
        var script = document.createElement("link");
        script.setAttribute("rel", "stylesheet");
        script.setAttribute("href", css_file_url);
        script.setAttribute("id", link_id);
        script.setAttribute("charset", "utf-8");

        var linkId = document.getElementById(link_id);
        // 如果已经添加了，删除掉。
        if (linkId) {
            head.removeChild(linkId);
        }
        head.appendChild(linkId);

        // IE
        if (window.all) {
            script.onreadystatechange = function () {
                if (script.readyStatus === "loaded" || script.readyState === "complete") {
                    // 执行后续事件
                }
            }
        }
        // W3C
        else {
            script.onload = function () {
                // 执行后续操作。
            }
        }
    }
    
    /**
        @dec
            获取时间:
            依赖于类库 （moment）
        @param {int} type : data(1),week(2),month(3),quarter(4)； default 1
        @return {Object} 格式化的时间 json 格式
    */
    util.getDate = function(type){
        var startDate = parseInt(moment().format('YYYY-MM-DD'));
        var endDate = parseInt(moment().format('YYYY-MM-DD'));
        if(type){
            // 如果是星期
            if(type === 2){
                // 今天是星期几？ （0-6）
                var today = parseInt(moment().format('d'));
                // 星期一
                if(today === 1){
                    startDate = parseInt(moment().format('YYYY-MM-DD'));
                }
                else if(today === 0){
                    startDate = parseInt(moment().subtract('days',(today + 7) -1).format('YYYY-MM-DD'));
                }
                else{
                    startDate = parseInt(moment().subtract('days',today -1).format('YYYY-MM-DD'));
                }
                
                endDate = parseInt(moment().format('YYYY-MM-DD'));
            }
            // 如果是当月
            else if(type === 3){
                 // 今天是几号？ （1-31）
                var today = parseInt(moment().format('D'));
                // 如果是1号
                if(today === 1){
                    startDate = parseInt(moment().format('YYYY-MM-DD'));
                }
                else{
                    startDate = parseInt(moment().subtract('days',today -1).format('YYYY-MM-DD'));
                }
                
                endDate = parseInt(moment().format('YYYY-MM-DD'));
            }
            // 如果是当前季度
            else if(type === 4){
                 // 当月是第几个月
                var month = parseInt(moment().format('M'));
                var year = parseInt(moment().format('YYYY'));
                
                var startYear = null;
                var startMonth = null;
                
                if(month >= 3){
                    startMonth = month - 2;
                    if(startMonth < 10){
                        startMonth = '0' + startMonth;
                    }
                    startDate = year + '-' + startMonth + '-' + '01';
                    
                }
                // 如果是一月 或者二月，那么开始的月就是去年了。
                else{
                     startYear = year - 1;
                     startMonth = 12 + (month - 2);
                    if(startMonth < 10){
                        startMonth = '0' + startMonth;
                    }
                    startDate = year + '-' + startMonth + '-' + '01';
                    
                }
                endDate = parseInt(moment().format('YYYY-MM-DD'));
            }
        }
        // 
        return {"srartDate":startDate,"endDate":endDate};
    }
    /*
    设置http请求头
    */
    util.setHandler = function(xhr,headers){
        if(headers){
            for(var headerName in headers){
                if(headerName.toLowCase() === "content-type"){
                    continue;
                }
                xhr.setRequestHeader(headerName,headers[headerName]);
            }
        }
        
    }

})(org.util);

