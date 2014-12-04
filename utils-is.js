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
        var patrn = /^[0-9]*$/;
        if (patrn.exec(value) === null || value === "") {
            return false
        } else {
            return true
        }
    }
    /**
     * is 判断 结束
     ***/


})(org.util);