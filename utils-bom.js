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
     *
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
     *
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

    util.getType = function (e) {
        var target = util.getTarget(e);
        return target.getAttribute("type") || target.type;
    }

    /**
     *
     * */
    util.addEvent = function (element, type, handler) {
        if (!element) {
            return;
        }
        // w3c
        if (element.addEventListener) {
            element.addEventListener(type, handler, false);
        }

        // ie
        else if (element.attachEvent) {
            element.attachEvent("on" + type, handler);
        }
    }

    /**
     *
     * */
    util.removeEvent = function (element, type, handler) {
        if (!element) {
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


})(org.util);

