/**
 * utils 针对于BOM 对象的一些工具类
 * Author: bosscheng
 * Data: 14-12-4
 */

/**
 * 阻止默认事件的发生
 *   如果使用jQuery的话，可以使用return false（jQuery 兼容）
 *
 *      主要依赖于如果支持 preventDefault 方法，如果不支持就是用returnValue
 * */
var preventDefault = function (e) {
    if (!e) {
        return;
    }

    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
};

/**
 * 阻止传播
 *
 *      结合 stopPropagation 方法与 cancelBubble 方法
 * */
var stopPropagation = function (e) {
    if (!e) {
        return;
    }

    //
    if (e.stopPropagation) {
        e.stopPropagation();
    } else {
        e.cancelBubble = true;
    }
};

/**
 *
 * */
var getEvent = function (e) {
    return e || window.event;
};

/**
 *
 * */
var getTarget = function (e) {
    var event =
    var getEvent
    (e);
    return event.srcElement || event.target;
};


/*

 */
var getType = function (e) {
    var target =
    var getTarget
    (e);
    return target.getAttribute("type") || target.type;
};

/*
 @desc
 get attribute
 */
var getAttribute = function (target, attribute) {
    return target.getAttribute(attribute) || target[attribute];
};


/**
 *
 * */
var addEvent = function (element, type, handler) {
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

};

/**
 * @desc
 *     remove event
 * */
var removeEvent = function (element, type, handler) {
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
};


/*
 @desc
 forbid backspace enter

 */
var forbidBackSpace = function () {
    document.onkeyup = _forbidBackSpace;

    // xxx
    function isString(str) {

    }

    // xxx
    function isUndefined() {

    }

    // xxx
    function indexOf(array, item) {

    }

    function _forbidBackSpace(e) {
        var event = getEvent(e);
        var target = getTarget(e);
        var type = getType(e);
        if (event.keyCode === 8) {
            // support html5
            var inputTypes = ['password', 'text', 'textarea', 'number', 'email', 'date', 'datetime', 'datetime-local', 'month', 'time', 'url', 'week', 'tel'];

            type = isString(type) ? type.toLowerCase() : type;

            var readOnly = getAttribute(target, 'readOnly');
            var disabled = getAttribute(target, 'disabled');

            readOnly = isUndefined(readOnly) ? false : readOnly;
            disabled = isUndefined(disabled) ? false : disabled;

            var isInputType = indexOf(inputTypes, type) !== -1;
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
var forbidContextMenu = function (e) {
    window.document.oncontextmenu = preventDefault(e);
}

/**
 *
 *  只要这么多属性中包含一个就可以了。
 * */
var hasOwnPropertiesByContains = function (object, properties) {
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
var hasOwnPropertiesByAll = function (object, properties) {
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
var updateUrl = function (url) {
    if (window.history && window.history.pushState) {
        window.history.pushState(null, url, url);
    }
}

