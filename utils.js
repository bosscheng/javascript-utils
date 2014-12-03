/**
 *  javascript util
 * Author: bosscheng
 * Data: 14-11-19
 */


var org = {};

org.util = {};

;
(function (util) {
    var toString = Object.prototype.toString;
    var AP = Array.prototype;

    /**
     * is 判断
     ***/
        // 对于 "Arguments" ,"Function" ,'String' ,'Number','Date' ,'RegExp' 这几种类型，可以通过 toString.call(value) === "[object xxx]" 来判断。


    util.isString = function (value) {
        return toString.call(value) === '[object String]';
    }

    /**
     * @doc function
     * @name util.isStringByNg
     * @function
     *
     * @description
     *  判断参数是否是 string 类型
     *
     * @param {*} 参数
     * @return {boolean} 如果参数是 string类型的话，返回true ，否则返回false
     *
     * */
    util.isStringByNg = function (value) {
        return typeof value === "string";
    }

    util.isFunction = function (value) {
        return toString.call(value) === '[object Function]';
    }

    /**
     * @doc function
     * @name util.isFunctionByNg
     * @function
     *
     * @description
     *  判断参数是否是function  类型
     * @param {*} 参数
     *
     * @return {boolean} 如果参数是function 类型的话，返回true，否则返回false
     *
     * */
    util.isFunctionByNg = function (value) {
        return typeof value === 'function';
    }

    util.isRegExp = function (value) {
        return toString.call(value) === '[object RegExp]';
    }
    /**
     * @doc function
     * @name util.isObject
     *
     * @desction
     * 定义一个参数是否是object类型的，不等同于javascript中的 typeof
     * 对于 ‘null’ 不是对象
     *
     *
     * @param {*} value Reference to check
     *
     * @return {boolean} 如果 参数是 object 但不是 null 的话，返回true 否则返回false
     *
     * */
    util.isObject = function (value) {
        return value === Object(value);
    }

    /**
     * @desc function
     * @name util.isObjectByNg
     *
     * @desction
     * 定义一个参数是否是object类型的，不等同于javascript中的 typeof
     * 对于 ‘null’ 不是对象
     *
     *
     * @param {*} value Reference to check
     *
     * @return {boolean} 如果 参数是 object 但不是 null 的话，返回true 否则返回false
     *
     * */
    util.isObjectByNg = function (value) {
        return value !== null && typeof value === "object";

    }

    // 优先去根据ECMAScript 5的方法
    util.isArray = Array.isArray || function (value) {
        return toString.call(value) === '[object Array]';
    }

    util.now = Date.now || function () {
        return new Date().getTime();
    }

    // is a given value a DOM element?
    /*
     * 原生态的校验方式
     * */
    util.isElement = function (value) {
        return !!(value && value.nodeType === 1);
    }

    /**
     * @doc function
     * @name util.isElement
     *
     * @function
     *
     * @description
     *  判断参数是否是 element （原生态的，或者被jquery 包装过的。）
     *
     * @param {*} 参数
     * @return {boolean} 如果参数是 element 类型的话 返回 true 否则返回false
     *
     * */
    util.isElement = function (value) {
        // 对于 nodeName 是原生态的方法
        // 对于 方法 on  和 find　是 jquery 所拥有的
        return (value && (value.nodeName || (node.on && node.find)));
    }

    util.isArguments = function (value) {
        return toString.call(value) === "[object Arguments]"
    }

    /**
     * @doc function
     * @name util.isNumberByNg
     * @function
     *
     * @description
     *  判断参数是否是 number类型
     *
     * @param {*} 参数
     * @return {boolean} 如果参数为number类型的话，返回true，否则返回false
     *
     * */
    util.isNumberByNg = function (value) {
        return typeof value === "number";
    }
    /**
     *
     *
     * */
    util.isNumber = function (value) {
        return toString.call(value) === "[object Number]";
    }

    util.isFinite = function (value) {
        return util.isNumber(value) && isFinite(value);
    }

    util.isNaN = function (value) {
        return value !== value;
    }

    util.isBoolean = function (value) {
        return value === true || value === false || toString.call(value) === "[object Boolean]";
    }

    /**
     *
     * */
    util.isBooleanByNg = function (value) {
        return typeof value === 'boolean';
    }

    /**
     * @doc function
     * @name util.isDate
     * @function
     *
     * @description
     *  判断参数是否是date 类型
     *
     * @param {*} 参数
     * @return {boolean} 如果参数是 date 类型的话 返回true，否则返回false
     *
     * */
    util.isDate = function (value) {
        return toString.call(value) === "[object Date]"
    }

    util.isNull = function (value) {
        return value === null;
    }

    /**
     * @doc  function
     * @name util,isUndefinedByJquery alis isUndefined
     * @function
     *
     * @desction
     * Determins if a reference is undefined
     *
     * @param {*} value Reference to check
     *
     * @return {boolean} True if 'value' is undefined
     *
     * */
    util.isUndefined = util.isUndefinedByJquery = function (value) {
        return value === void 0;
    }

    /**
     * @doc  function
     * @name util,isUndefinedByNg
     * @function
     *
     * @desction
     * Determins if a reference is undefined
     *
     * @param {*} value Reference to check
     *
     * @return {boolean} True if 'value' is undefined
     *
     * */
    util.isUndefinedByNg = function (value) {
        return typeof value === "undefined";
    }

    /**
     * @doc  function
     * @name util,isDefined
     * @function
     *
     * @desction
     * Determins if a reference is defined
     *
     * @param {*} value Reference to check
     *
     * @return {boolean} True if 'value' is defined
     *
     * */
    util.isDefined = function (value) {
        return !util.isUndefinedByNg(value);
    }

    // 借鉴 jquery的实现。
    util.isWindow = function (value) {
        return value && typeof value === "object" && "setInterval" in value;
    }

    /**
     * @doc  function
     * @name util.isWindowByNg
     * @function
     *
     * @description
     *  判断参数是否是 window 类型
     * @param {*} 参数
     *
     * @return {boolean} 如果参数是 window对象的话 返回true 否则返回false
     *
     * */
    util.isWindowByNg = function (value) {
        return value && value.document && value.location && value.alert && value.setInterval;
    }

    // 借鉴 jquery的实现
    util.isWindowNew = function (value) {
        return value !== null && value === value.window;
    }

    // is empty object
    util.isEmptyObject = function (value) {
        var name;
        for (name in value) {
            return false;
        }

        return true;
    }

    // 对于 plain object
    // any object or value whose internal [[class]] property is not "[object object]"
    // DOM nodes
    // window
    util.isPlainObject = function (value) {
        if (!util.isObject(value) || value.nodeType || util.isWindow(value)) {
            return false;
        }

        if (value.constructor && value.hasOwnProperty.call(value.constructor.prototype, "isPrototypeOf")) {
            return false;
        }

        return true;
    }
    /**
     * @doc function
     * @name util.isFile
     * @function
     *
     * @description
     *  判断参数是否是 file 类型
     * @param {*} 参数
     *
     * @return {boolean} 如果参数是 file 类型的话，返回true 否则返回false
     * */
    util.isFile = function (value) {
        return toString.call(value) === '[object File]';
    }

    /**
     * @doc function
     * @name util.isArrayLike
     * @function
     *
     * @description
     *  判断参数是否是 array  或者是 array-like 对象（NodeList,Aragument,String .....）
     * @param {*} 参数
     *
     * @return {boolean}
     *
     *
     * */
    util.isArrayLike = function (value) {
        if (value === null || util.isWindow(value)) {
            return false;
        }

        var length = value.length;

        if (value.nodeType === 1 && length) {
            return true;
        }

        return util.isString(value) || util.isArray(value) || length === 0 || typeof length === "number" && length > 0 && (length - 1) in value;
    }


    /**
     * is 判断 结束
     ***/


    /**
     * foreach
     * */
    var forEach = util.forEach = AP.forEach ?
        //
        function (arr, fn) {
            arr.forEach(fn);
        } :
        //
        function (arr, fn) {
            for (var i = 0; i < arr.length; i++) {
                fn(arr[i], i, arr);
            }
        }

    /**
     * keys
     * */
    var keys = util.keys = Object.keys || function (o) {
        var ret = [];
        // 利用 in 方式
        for (var p in o) {
            // 通过 hasOwnProperty 方法。
            if (o.hasOwnProperty(p)) {
                ret.push(p);
            }
        }
        return ret;
    }

    /**
     * has
     * */
    util.has = function (obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
    }


    util.random = function (min, max) {
        // null === max
        if (util.isNull(max)) {
            max = min;
            min = 0;
        }
        return min + Math.floor(Math.random() * (max - min + 1));
    }

    /**
     * indexOf
     * */
    util.indexOf = AP.indexOf ?
        //
        function (arr, item) {
            return arr.indexOf(item);
        } :
        //
        function (arr, item) {
            for (var i = arr.length - 1; i >= 0; i--) {
                // 遍历数值，查询到符合的结果。
                if (arr[i] === item) {
                    return i;
                }
            }
            return -1;
        }

    util.map = AP.map ?
        //
        function (arr, fn) {
            return arr.map(fn);
        } :
        //
        function (arr, fn) {
            var ret = [];
            forEach(arr, function (item, i, arr) {
                // 讲执行完之后的结果，从新存储进去。
                ret.push(fn(item, i, arr))
            })
            return ret;
        }

    /**
     *
     * */
    util.filter = AP.filter ?
        function (arr, fn) {
            return arr.filter(fn);
        } :

        function (arr, fn) {
            var ret = [];
            forEach(arr, function (item, i, arr) {
                // 如果满足函数的条件。
                if (fn(item, i, arr)) {
                    ret.push(item);
                }
            })
            return ret;
        }


    // log:  外面封装了一层安全机制。。。。。。。
    util.log = function () {
        if (typeof console === "undefined") return;
        // 获取参数对象
        var args = Array.prototype.slice.call(Argments);
        var type = "log";
        var last = args[args.length - 1];
        //
        console[last] && (type = args.pop());
        if (type === "log") return;

        if (console[type].apply) {
            console[type].apply(console, args);
            return;
        }

        var length = args.length;

        //
        if (length === 1) {
            console[type](args[0]);
        }

        else if (length === 2) {
            console[type](args[0], args[1]);
        }
        else if (length === 3) {
            console[type](args[0], args[1], args[2]);
        }
        else {
            console[type](args.join(' '));
        }
    }

    /**
     * @desc
     *      获取当前元素样式
     * @param oElm   元素对象
     * @param strCssRule   需要获取的css属性
     *
     * */
    util.getStyle = function (oElm, strCssRule) {
        var strValue = "";
        // 如果存在 defaultView 方法的话，且存在getComputedStyle方法
        if (document.defaultView && document.defaultView.getComputedStyle) {
            // getComputedStyle 获取对象的css属性的。 然后通过 getPropertyValue 获取属性｛key:value｝
            strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
        }
        //
        else if (oElm.currentStyle) {
            strCssRule = strCssRule.replace(/\-(\w)/g, function (strMath, p1) {
                return p1.toUpperCase();
            });

            strValue = oElm.currentStyle[strCssRule];
        }

        //
        return strValue;
    }

    /**
     * @desc
     *      格式化数字，格式化金额
     *
     * @param number: 要格式化的数字
     * @param decimals: 保留几位小数
     * @param decPoint: 小数符号
     * @param thousandsSep: 千分位符号

     *
     * */
    util.numberFormat = function (number, decimals, decPoint, thousandsSep) {
        // 将非 0-9/-+eE.的部分用空白替换
        // number + '' 转义成 string 类型
        number = (number + '').replace(/[^0-9+-Ee.]/g, '');
        // +string 转义成 number 类型
        var n = !isFinite(+number) ? 0 : +number;
        var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
        var sep = (typeof thousandsSep === "undefined") ? ',' : thousandsSep;
        var dec = (typeof decPoint === "undefined") ? '.' : decPoint;
        var s = '';
        // 将
        var toFixedFix = function (n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.ceil(n * k) / k;
        }


        // 将数字变成数组 [0] 表示整数，[1]表示分数
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        //
        var re = /(-?\d+)(\d{3})/;
        // 将整数按照 三位的用符号分割
        while (re.test(s[0])) {
            s[0] = s[0].replace(re, "$1" + sep + "$2");
        }

        // 将小数四舍五入
        if ((s[1] || '').length < prec) {
            s[1] = s[1] || '';
            s[1] += [prec - s[1].length + 1].join('0');
        }

        // 将数组转义成字符串
        return s.join(dec);
    }

    /**
     * 全角转化为半角函数
     *
     * */
    util.toCDB = function (str) {
        var result = '';
        var code;
        for (var i = 0; i < str.length; i++) {
            code = str.charCodeAt(i);
            if (code >= 65281 && code <= 65374) {
                result += String.fromCharCode(str.charCodeAt(i) - 65248);
            }
            else if (code === 12288) {
                result += String.fromCharCode(str.charCodeAt(i) - 12288 + 32);
            }
            else {
                result += str.charAt(i);
            }
        }
        return result;
    }
    /**
     *  半角转化为全角
     * */
    util.toDBC = function (str) {
        var result = '';
        var code;
        for (var i = 0; i < str.length; i++) {
            code = str.charCodeAt(i);
            if (code >= 33 && code <= 126) {
                result += String.fromCharCode(str.charCodeAt(i) + 65248);
            }
            else if (code === 32) {
                result += String.fromCharCode(str.charCodeAt(i) + 12288 - 32);
            }
            else {
                result += str.charAt(i);
            }
        }
        return result;
    }

    /*
     * 全角半角的转换
     *
     * //iCase: 0全到半，1半到全，其他不转化
     * */
    util.chgCase = function (sStr, iCase) {
        if (typeof sStr != "string" || sStr.length <= 0 || !(iCase === 0 || iCase == 1)) {
            return sStr;
        }

        if (iCase) {
            return util.toDBC(sStr);
        }
        else {
            return util.toCDB(sStr);
        }

    }


    /*
     * 判断鼠标是否移除事件
     * todo: 待测试
     * */
    util.isMouseOut = function (e, handler) {
        if (e.type !== 'mouseout') {
            return false;
        }
        var reltg = e.relatedTarget ? e.relatedTarget : e.type === 'mouseout' ? e.toElement : e.fromElement;
        while (reltg && reltg !== handler) {
            reltg = reltg.parentNode;
        }
        return (reltg !== handler);
    }


    /*
     * 获取窗口可视范围的宽和高
     * todo: 待测试
     * */
    util.getViewSize = function () {
        var de = document.documentElement;
        var db = document.body;
        var viewW = de.clientWidth == 0 ? db.clientWidth : de.clientWidth;
        var viewH = de.clientHeight == 0 ? db.clientHeight : de.clientHeight;
        return Array(viewW, viewH);
    }

    /*
     * 实现utf8解码
     * */
    util.utf8Decode = function (str_data) {
        var tmp_arr = [], i = 0, ac = 0, c1 = 0, c2 = 0, c3 = 0;
        // 变成string类型
        str_data += '';

        while (i < str_data.length) {
            c1 = str_data.charCodeAt(i);
            if (c1 < 128) {
                tmp_arr[ac++] = String.fromCharCode(c1);
                i++;
            } else if (c1 > 191 && c1 < 224) {
                c2 = str_data.charCodeAt(i + 1);
                tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
                i += 2;
            } else {
                c2 = str_data.charCodeAt(i + 1);
                c3 = str_data.charCodeAt(i + 2);
                tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }

        return tmp_arr.join('');
    }

    /*
     * base64 解码（依赖utf8解码）
     * */
    util.base64Decode = function (data) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var o1, o2, o3, h1, h2, h3, h4, bits, i = 0, ac = 0, dec = "", tmp_arr = [];
        if (!data) {
            return data;
        }
        data += '';
        do {
            h1 = b64.indexOf(data.charAt(i++));
            h2 = b64.indexOf(data.charAt(i++));
            h3 = b64.indexOf(data.charAt(i++));
            h4 = b64.indexOf(data.charAt(i++));
            bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
            o1 = bits >> 16 & 0xff;
            o2 = bits >> 8 & 0xff;
            o3 = bits & 0xff;
            if (h3 == 64) {
                tmp_arr[ac++] = String.fromCharCode(o1);
            } else if (h4 == 64) {
                tmp_arr[ac++] = String.fromCharCode(o1, o2);
            } else {
                tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
            }
        } while (i < data.length);
        dec = tmp_arr.join('');
        dec = util.utf8Decode(dec);
        return dec;
    }

    /*
     * 金额大写转换函数
     * */
    util.transform = function (tranvalue) {
        try {
            var i = 1;
            var dw2 = new Array("", "万", "亿"); //大单位
            var dw1 = new Array("拾", "佰", "仟"); //小单位
            var dw = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); //整数部分用
            //以下是小写转换成大写显示在合计大写的文本框中
            //分离整数与小数
            var source = splits(tranvalue);
            var num = source[0];
            var dig = source[1];
            //转换整数部分
            var k1 = 0; //计小单位
            var k2 = 0; //计大单位
            var sum = 0;
            var str = "";
            var len = source[0].length; //整数的长度
            for (i = 1; i <= len; i++) {
                var n = source[0].charAt(len - i); //取得某个位数上的数字
                var bn = 0;
                if (len - i - 1 >= 0) {
                    bn = source[0].charAt(len - i - 1); //取得某个位数前一位上的数字
                }
                sum = sum + Number(n);
                if (sum != 0) {
                    str = dw[Number(n)].concat(str); //取得该数字对应的大写数字，并插入到str字符串的前面
                    if (n == '0') sum = 0;
                }
                if (len - i - 1 >= 0) { //在数字范围内
                    if (k1 != 3) { //加小单位
                        if (bn != 0) {
                            str = dw1[k1].concat(str);
                        }
                        k1++;
                    } else { //不加小单位，加大单位
                        k1 = 0;
                        var temp = str.charAt(0);
                        if (temp == "万" || temp == "亿") //若大单位前没有数字则舍去大单位
                            str = str.substr(1, str.length - 1);
                        str = dw2[k2].concat(str);
                        sum = 0;
                    }
                }
                if (k1 == 3) { //小单位到千则大单位进一
                    k2++;
                }
            }
            //转换小数部分
            var strdig = "";
            if (dig != "") {
                var n = dig.charAt(0);
                if (n != 0) {
                    strdig += dw[Number(n)] + "角"; //加数字
                }
                var n = dig.charAt(1);
                if (n != 0) {
                    strdig += dw[Number(n)] + "分"; //加数字
                }
            }
            str += "元" + strdig;
        } catch (e) {
            return "0元";
        }
        return str;
    }
    //拆分整数与小数
    function splits(tranvalue) {
        var value = new Array('', '');
        var temp = tranvalue.split(".");
        for (var i = 0; i < temp.length; i++) {
            value = temp;
        }
        return value;
    }

    /*
     * 动态执行VBScript 脚本
     * 主要依靠 window.execScript method
     * */
    util.vbScript = function () {
        try {
            var script = document.getElementById("K1").value;
            if (script.trim() == "")return;
            window.execScript('On Error Resume Next \n' + script + '\n If Err.Number<>0 Then \n MsgBox "请输入正确的VBScript脚本!",48,"脚本错误!" \n End If', "vbscript")
        } catch (e) {
            alert(e.message);
        }
    }

    /*
     * 清除掉html代码中的脚本
     * */
    util.clearScript = function (html) {
        html.value = html.value.replace(/<script.*?>[\s\S]*?<\/script>|\s+on[a-zA-Z]{3,16}\s?=\s?"[\s\S]*?"|\s+on[a-zA-Z]{3,16}\s?=\s?'[\s\S]*?'|\s+on[a-zA-Z]{3,16}\s?=[^ >]+/ig, "");
    }

    /*
     * 动态执行javascript 脚本
     * */
    util.doJS = function (html) {
        try {
            eval(html.value);
        }
        catch (e) {
            alert(e.message);
        }
    }

    /*
     * 字符串反序
     * */
    util.isReverse = function (text) {
        return text.split('').reverse().join('');
    }


    /*
     * set sort
     * 按字母排序，对每行进行数组排序
     * */
    util.setSort = function () {
        var text = K1.value.split(/[\r\n]/).sort().join("\r\n");//顺序
        var test = K1.value.split(/[\r\n]/).sort().reverse().join("\r\n");//反序
        K1.value = K1.value != text ? text : test;
    }

    /*
     * 清除相同的数组
     * */
    util.unique = function (array) {
        var x = array.split(/[\r\n]+/);
        var y = '';
        for (var i = 0; i < x.length; i++) {
            if (!new RegExp("^" + x.replace(/([^\w])/ig, "\\$1") + "$", "igm").test(y)) {
                y += x + "\r\n"
            }
        }
        return y
    }

    /*
     * 提取页面代码中的所以网址
     * */
    util.getUrl = function () {
        var aa = document.documentElement.outerHTML.match(/(url\(|src=|href=)[\"\']*([^\"\'\(\)\<\>\[\] ]+)[\"\'\)]*|(http:\/\/[\w\-\.]+[^\"\'\(\)\<\>\[\] ]+)/ig).join("\r\n").replace(/^(src=|href=|url\()[\"\']*|[\"\'\>\) ]*$/igm, "");

        return aa;
    }


    /*
     * 打开新的窗口，
     * todo: 待验证
     * */
    util.openWindow = function (url, windowName, width, height) {
        var x = parseInt(screen.width / 2.0) - (width / 2.0);
        var y = parseInt(screen.height / 2.0) - (height / 2.0);
        var isMSIE = (navigator.appName == "Microsoft Internet Explorer");
        if (isMSIE) {
            var p = "resizable=1,location=no,scrollbars=no,width=";
            p = p + width;
            p = p + ",height=";
            p = p + height;
            p = p + ",left=";
            p = p + x;
            p = p + ",top=";
            p = p + y;
            retval = window.open(url, windowName, p);
        } else {
            var win = window.open(url, "ZyiisPopup", "top=" + y + ",left=" + x + ",scrollbars=" + scrollbars + ",dialog=yes,modal=yes,width=" + width + ",height=" + height + ",resizable=no");
            eval("try { win.resizeTo(width, height); } catch(e) { }");
            win.focus();
        }
    }

    /*
     * 获取url中的get参数
     * */
    util.getGet = function () {
        var queryStr = window.location.href.split('?');
        var gets = [];
        var getArr = [];
        var tempArr;
        var key;
        if (queryStr[1]) {
            gets = queryStr[1].split('&');
            for (var i = 0; i < gets.length; i++) {
                tempArr = gets[i].split("=")
                key = tempArr[0];
                getArr[key] = tempArr[1];
            }
        }

        return getArr;
    }

    /*
     * 返回顶部的实现方式
     * */
    util.backTop = function (btnId) {
        // $btn
        var btn = document.getElementById(btnId);

        var d = document.documentElement;

        var b = document.body;
        //
        window.onscroll = set;

        btn.style.display = "none";
        // 按钮被点击了之后
        btn.onclick = function () {
            // 隐藏掉
            btn.style.display = "none";
            // 取消绑定事件
            window.onscroll = null;
            // 每个10ms间隔 往上面移动，当返回到顶部之后，就可以clearInterval 了。
            this.timer = setInterval(function () {

                d.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);
                b.scrollTop -= Math.ceil((d.scrollTop + b.scrollTop) * 0.1);

                if ((d.scrollTop + b.scrollTop) == 0) clearInterval(btn.timer, window.onscroll = set);

            }, 10);
        };

        // on scroll 事件
        function set() {
            //
            btn.style.display = (d.scrollTop + b.scrollTop > 100) ? 'block' : "none"
        }
    }

    /*
     * 全部替换
     * */
    util.replaceAll = function (prestr, str1, str2) {
        // 调用replace 方法实现的
        return prestr.replace(new RegExp(str1, 'gm'), str2);
    }

    /*
     * 清除最外层的空格  ---- 可以参考jquery如何实现的
     *
     * */
    util.trim = function (str) {

        var reExtraSpace = /^\s*(.*?)\s+$/;

        return str.replace(reExtraSpace, '$1');
    }

    /*
     * 清除左边外层空格
     * */
    util.ltrim = function (str) {
        return str.replace(/^(s*| *)/, '');
    }

    /*
     * 去除右边空格
     * */
    util.rtrim = function (str) {
        return str.replace(/(s*| *)/, '');
    }


})(org.util);


/**
 * is的另外一种写法
 * */
org.newUtil = {};

;
(function (util) {
    //
    function isType(type) {
        return function (obj) {
            return Object.prototype.toString.call(obj) === "[object " + type + "]"
        }
    }

    util.isObject = isType("Object");
    util.isString = isType("String");
    util.isArray = Array.isArray || isType("Array");
    util.isFunction = isType("Function");

})(org.newUtil);


