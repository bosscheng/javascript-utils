/**
 * utils is 判断
 * Author: bosscheng
 * Data: 14-12-4
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

    /**
     *
     * */
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
    /**
     *
     * */
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

    /**
     *
     * */
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

    /**
     *
     * */
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

    /**
     *
     * */
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
    /**
     *
     * */
    util.isFinite = function (value) {
        return util.isNumber(value) && isFinite(value);
    }

    /**
     *
     * */
    util.isNaN = function (value) {
        return value !== value;
    }

    /**
     *
     * */
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


    /**
     *
     * */
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


    /*
     * 是否为数字类型
     * */
    util.isDigit = function (value) {
        var pattern = /^[0-9]*$/;
        if (pattern.exec(value) === null || value === "") {
            return false
        } else {
            return true
        }
    }

    /*
     * 判断属性值 a 和 b 是否相等，
     * ps: 仅仅适用于属性值的判断，非普通的 === 或者 == 判断
     * */
    util.isEqual = function (a, b) {
        if (a === b) {
            return true;
        }
        // 都是为空的 参数
        if (util.isEmptyAttrValue(a) && util.isEmptyAttrValue(b)) {
            return true;
        }
        // 如果两者的类型不匹配的话
        var className = util.toString.call(a);
        if (className !== util.toString.call(b)) {
            return false;
        }
        // 类的名称
        switch (className) {
            // Strings ,numbers, dates, and booleans
            case "[object String]":
                // 对象包装方式 new String("") 和原始方式 a是等价的
                return a == String(b);
            case "[object Number]":
                // "NaN" 是相等的。
                if (a != +a) {
                    return  b != +b;
                }
                else {
                    if (a == 0) {
                        return 1 / a == 1 / b;
                    }
                    else {
                        return a == +b;
                    }
                }
            case "[object Date]":
            case "[object Boolean]":
                //
                return +a == +b;
            case "[object RegExp]":
                // 通过比较RegExp的对象属性来判断是否相等
                // 正则表达式源文件
                var source = a.source == b.source;
                // RegExp 是否标志 g
                var global = a.global == b.global;
                // RegExp 是否标志 m
                var multiline = a.multiline == b.multiline;
                // RegExp 是否标志 i
                var ignoreCase = a.ignoreCase == b.ignoreCase;
                return source && global && multiline && ignoreCase;

            // 简单判断数组包含的primitive 值是否相等
            case "[object Array]":
                var aString = a.toString();
                var bString = b.toString();
                // 只要包含非primitive 值，为了稳妥起见，都返回false；
                return aString.indexOf("[object") === -1 && bString.indexOf("[object") === -1 && aString === bString;
        }

        if (typeof  a !== "object" || typeof  b !== "object") {
            return false;
        }
        //


        // 其他情况都返回false，以避免误判导致change 事件没有发生。
        return false;
    }

    /**
     *
     * */
    util.isEmptyAttrValue = function (object) {
        // 如果为null ，undefined 或者
        return object == null ||
            //  或者是 '' / [] 对象
            ((l.isString(object) || util.isArray(object)) && object.length === 0 || util.isEmptyObjectByArale(object));
    }

    /**
     * 是否是空的对象
     * */
    util.isEmptyObjectByArale = function (object) {
        // 如果转化为boolean 为 false
        // 如果不是Object类型
        // 如果是浏览器元素
        // 如果是window元素
        // 如果没有hasOwnProperty 属性
        if (!object || !util.isObject(object) || object.nodeType || util.isWindow(object) || !object.hasOwnProperty) {
            return false;
        }

        // 遍历 object对象，如果存在 属性的话，直接返回false
        for (var p in object) {
            // 遍历属性值
            if (object.hasOwnProperty(p)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Detect the JScript [[DontEnum]] bug:
     * In IE < 9 an objects own properties, shadowing non-enumerable ones, are
     * made non-enumerable as well.
     * https://github.com/bestiejs/lodash/blob/7520066fc916e205ef84cb97fbfe630d7c154158/lodash.js#L134-L144
     */
    /** Detect if own properties are iterated after inherited properties (IE < 9) */
    var iteratesOwnLast;
    (function () {
        var props = [];

        function Ctor() {
            this.x = 1;
        }

        Ctor.prototype = {
            valueOf: 1,
            y: 1
        };
        for (var prop in new Ctor()) {
            props.push(prop);
        }
        iteratesOwnLast = props[0] !== "x";
    })();


    util.isPlainObject = function (object) {
        if (!object || !util.isObject(object) || object.nodeType || util.isWindow(object)) {
            return false;
        }

        try {
            // constructor 必须是一个对象
            if (object.constructor && util.hasOwn.call(object, " ") && !util.hasOwn.call(object.constructor.prototype, "isPrototypeOf")) {
                return false;
            }
        }
        catch (e) {
            //  IE8,IE9 会在某些主体对象上抛异常
            return false;
        }

        var key;
        // Support: IE<9
        // Handle iteration over inherited properties before own properties.
        // http://bugs.jquery.com/ticket/12199
        if (iteratesOwnLast) {
            for (key in object) {
                return util.hasOwn.call(object, key);
            }
        }

        // Own properties are enumerated firstly, so to speed up,
        // if last one is own, then all properties are own.
        for (key in object) {
        }
        return key === undefined || util.hasOwn.call(object, key);

    }


    /*
     判断浏览器
     */
    // 是否是IE
    util.isIE = function () {
        return navigator.userAgent.indexOf("MSIE") > 0;
    }

    util.isIE6 = function () {
        return navigator.userAgent.indexOf("MSIE 6.0") > 0;
    }

    util.isIE7 = function () {
        return navigator.userAgent.indexOf("MSIE 7.0") > 0;
    }

    util.isIE8 = function () {
        return navigator.userAgent.indexOf("MSIE 8.0") > 0;
    }

    util.isIE9 = function () {
        return navigator.userAgent.indexOf("MSIE 9.0") > 0;
    }

    util.isIE10 = function () {
        return navigator.userAgent.indexOf("MSIE 10.0") > 0;
    }

    util.isIE11 = function () {
        return navigator.userAgent.indexOf("MSIE 11.0") > 0;
    }

    util.isChrome = function () {
        // 这样存在问题的， 很多内核都是使用的chrome内核， 会导致判断不准确。
        return navigator.userAgent.indexOf("Chrome") > 0;
    }

    util.isFirefox = function () {
        return navigator.userAgent.indexOf("Firefox") > 0;
    };

    /**
     *
     * */
    util.isType = function (type) {
        return function (obj) {
            return Object.prototype.toString.call(obj) === "[object " + type + "]"
        }
    };


    var isObject = util.isType("Object");
    var isArray = Array.isArray || util.isType("Array");
    var isFunction = util.isType("Function");
    var isString = util.isType("String");


    /**
     * is 判断 结束
     ***/


})(org.util);