/**
 * utils 针对于BOM 对象的一些工具类
 * Author: bosscheng
 * Data: 14-12-4
 */

var org = org || {};

org.util = org.util || {};

;
(function (util) {
    /**
     * 阻止默认事件的发生
     *   如果使用jQuery的话，可以使用return false（jQuery 兼容）
     *
     *      主要依赖于如果支持 preventDefault 方法，如果不支持就是用returnValue
     * */
    util.preventDefault = function (e) {
        if (!e) {
            return;
        }

        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
    }

    /**
     * 阻止传播
     *
     *      结合 stopPropagation 方法与 cancelBubble 方法
     * */
    util.stopPropagation = function (e) {
        if (!e) {
            return;
        }

        //
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        else {
            e.cancelBubble = true;
        }
    }

    /**
     *
     * */
    util.getEvent = function (e) {
        return e || window.event;
    }

    /**
     *
     * */
    util.getTarget = function (e) {
        var event = util.getEvent(e);
        return event.srcElement || event.target;
    }


    /*

     */
    util.getType = function (e) {
        var target = util.getTarget(e);
        return target.getAttribute("type") || target.type;
    }

    /*
     @desc
     get attribute
     */
    util.getAttribute = function (target, attribute) {
        return target.getAttribute(attribute) || target[attribute];
    }


    /**
     *
     * */
    util.addEvent = function (element, type, handler) {
        if (!element || element.nodeType !== 1) {
            return;
        }
        
        // ie, 优先判断是否是ie
        if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        }
        // w3c
        else if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        }
        
    }

    /**
     * @desc
     *     remove event
     * */
    util.removeEvent = function (element, type, handler) {
        if (!element || element.nodeType !== 1) {
            return;
        }
        // w3c
        if (element.removeEventListener) {
            element.removeEventListener(type, handler, false);
        }
        // IE
        else if (element.detachEvent) {
            element.detachEvent("on" + type, handler);
        }
    }

    /*
     @desc
     forbid backspace enter

     */
    util.forbidBackSpace = function () {
        document.onkeyup = _forbidBackSpace;

        function _forbidBackSpace(e) {
            var event = util.getEvent(e);
            var target = util.getTarget(e);
            var type = util.getType(e);
            if (event.keyCode === 8) {
                // support html5
                var inputTypes = ['password', 'text', 'textarea', 'number', 'email', 'date', 'datetime', 'datetime-local', 'month', 'time', 'url', 'week', 'tel'];

                type = util.isString(type) ? type.toLowerCase() : type;

                var readOnly = util.getAttribute(target, 'readOnly');
                var disabled = util.getAttribute(target, 'disabled');

                readOnly = util.isUndefined(readOnly) ? false : readOnly;
                disabled = util.isUndefined(disabled) ? false : disabled;

                var isInputType = util.indexOf(inputTypes, type) !== -1;
                var isReadOnlyOrDisabled = readOnly === true || disabled === true;

                var enableOne = isInputType && isReadOnlyOrDisabled;
                var enableTwo = !isInputType;
                if (enableOne || enableTwo) {
                    return false;
                }
            }
            return true;
        }
    }

    /*
     @desc
     forbid context menu

     */
    util.forbidContextMenu = function () {
        window.document.oncontextmenu = util.preventDefault(e);
    }

    /**
     *
     *  只要这么多属性中包含一个就可以了。
     * */
    util.hasOwnPropertiesByContains = function (object, properties) {
        for (var i = 0, len = properties.length; i < len; i++) {
            if (object.hasOwnProperty(properties[i])) {
                return true;
            }
        }
        return false;
    }

    /**
     * 必须全部包含才行
     * */
    util.hasOwnPropertiesByAll = function (object, properties) {
        var eqNum = 0, len = properties.length, i = 0;
        for (; i < len; i++) {
            if (object.hasOwnProperty(properties[i])) {
                eqNum = eqNum + 1;
            }
        }
        return eqNum === len;
    }
    
    /*
     * 更新浏览器地址栏链接地址
        @method updateUrl
        @param {String} url
     */
    util.updateUrl = function(url){
        if(window.history && window.history.pushState){
            window.history.pushState(null,url,url);
        }
    }


})(org.util);

