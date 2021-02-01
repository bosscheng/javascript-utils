var addEvent = (function () {
    //
    if (!document.addEventListener) {
        return function (element, type, handler) {
            if (!element || element.nodeType !== 1) {
                return;
            }
            element.attachEvent("on" + type, handler);
        };
    } else {
        return function (element, type, handler) {
            if (!element || element.nodeType !== 1) {
                return;
            }
            element.addEventListener(type, handler, false);
        };
    }

})();

var removeEvent = (function () {
    //
    if (!document.removeEventListener) {
        return function (element, type, handler) {
            if (!element || element.nodeType !== 1) {
                return;
            }
            element.detachEvent("on" + type, handler);
        };
    } else {
        return function (element, type, handler) {
            if (!element || element.nodeType !== 1) {
                return;
            }
            element.removeEventListener(type, handler, false);
        };
    }
})();
