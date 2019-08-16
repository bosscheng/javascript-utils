/**
 * javascript others 杂类
 * Author: bosscheng
 * Data: 14-11-27
 */


/*
 * 解决 offsetX 兼容性问题
 * */
var getOffset = function (e) {
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
};

/*
 *  计算当前触发元素到文档的距离
 * */
var getPageCoord = function (element) {
    var coord = {X: 0, Y: 0};
    // 计算从当前触发元素到根节点为止，
    // 各级 offsetParent 元素的 offsetLeft 或 offsetTop 值之和
    while (element) {
        coord.X += element.offsetLeft;
        coord.Y += element.offsetTop;
        element = element.offsetParent;
    }
    return coord;
};

/*
 * 获取网页被卷去的位置
 * */
var getScrollXY = function () {
    return document.body.scrollTop ? {
        x: document.body.scrollLeft,
        y: document.body.scrollTop
    } : {
        x: document.documentElement.scrollLeft,
        y: document.documentElement.scrollTop
    };
};


/*
 * 随机数时间戳
 * */
var uniqueId = function () {
    var a = Math.random;
    var b = parseInt;
    return Number(new Date()).toString() + b(10 * a()) + b(10 * a()) + b(10 * a());
};

/*
 * 获取页面可视高度
 * */
var getPageViewHeight = function () {
    var d = document, a = d.compatMode === "BackCompat"
        ? d.body
        : d.documentElement;
    return a.clientHeight;
};

/*
 * 获取页面的宽度
 * */
var getPageViewWidth = function () {
    var d = document, a = d.compatMode === "BackCompat"
        ? d.body
        : d.documentElement;
    return a.clientWidth;
};

/*
 * 获取页面宽度
 * */
var getPageWidth = function () {
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
        ? a
        : g.documentElement;
    return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth);
};

/*
 * 获取页面的高度
 * */
var getPageHeight = function () {
    var g = document, a = g.body, f = g.documentElement, d = g.compatMode == "BackCompat"
        ? a
        : g.documentElement;
    return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight);
};

/*
 * 获取到页面scrollTop
 * */
var getPageScrollTop = function () {
    var a = document;
    return a.documentElement.scrollTop || a.body.scrollTop;
};

var getPageScrollLeft = function () {
    var a = document;
    return a.documentElement.scrollLeft || a.body.scrollLeft;
};
/*
 * 获取当前路径
 * */
var getCurrPageUrl = function () {
    var currentPageUrl = "";
    if (typeof this.href === "undefined") {
        currentPageUrl = document.location.toString().toLowerCase();
    } else {
        currentPageUrl = this.href.toString().toLowerCase();
    }
    return currentPageUrl;
};

/*
 * $ 检查ID 检索元素对象
 * */
var $ = function (id) {
    return !id ? null : document.getElementById(id);
};

/*
 * 设置首页
 * */
var setHomePage = function (url) {
    if (document.all) {
        document.body.style.behavior = 'url(#default#homepage)';
        document.body.setHomePage(url);
    } else if (window.sidebar) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (e) {
                alert("该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true");
            }
        }
        var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
        prefs.setCharPref('browser.startup.homepage', url);
    }
};

/*
 * 加入收藏夹
 * */
var addFavorite = function (sURL, sTitle) {
    try {
        window.external.addFavorite(sURL, sTitle);
    } catch (e) {
        try {
            window.sidebar.addPanel(sTitle, sURL, "");
        } catch (e) {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
};

/**
 * @doc function
 * @name var size
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
var size = function (obj, ownPropsOnly) {
    var count = 0, key;

    if (isArray(obj) || isString(obj)) {
        return obj.length;
    } else if (isObject(obj)) {
        for (key in obj) {
            if (!ownPropsOnly || obj.hasOwnProperty(key)) {
                count++;
            }
        }
    }
    return count;
};

/**
 *
 * */
var loadJs = function (script_file_url, script_id, callback) {
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
                callback && callback();
            }
        };
    }
    // W3C
    else {
        script.onload = function () {
            // 执行后续操作。
            callback && callback();
        };
    }
};


/*
    mix 最小化
*/
var mix = function (r, s, wl) {
    // 复制所有的属性
    for (var p in s) {
        if (s.hasOwnProperty(p)) {
            if (wl && indexOf(wl, p) === -1) {
                continue;
            }
            // 在 iphone 1 代等设备的Safari中，prototype也会被枚举出来，这里要过滤掉。
            if (p !== "prototype") {
                r[p] = s[p];
            }
        }
    }
};

/*
    驼峰转下划线
*/
var camelToUnderscore = function (str) {
    return str.replace(/([A-Z])/g, function ($0, $1) {
        return '_' + $1.toLowerCase();
    });
};

// 获取被被加载的host
var getHostBySelf = function (id) {
    var scripts = document.getElementsByTagName("script");
    var selfSctipt = document.getElementById(id) || scripts[scripts.length - 1];
    var url = selfSctipt.hasAttribute ? selfSctipt.src : selfSctipt.getAttribute("src", 4);
    var arr = url.split("//");
    return arr[0] + '//' + arr[1].split('/')[0];
};

// 根据name获取到对应name的value
var fieldValue = function (object, name) {
    try {
        return object[name];
    } catch (e) {
        return undefined;
    }

};

// 什么都不做
var doNothing = function () {
    return true;
};

// once
var once = function (fn, context) {
    var result;

    return function () {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }
        return result;
    };
};

