var getEvent = function (e) {
    return e || window.event;
};

var getTarget = function (e) {
    var event = getEvent(e);
    return event.srcElement || event.target;
};

var getType = function (e) {
    var target = getTarget(e);
    return target.getAttribute("type") || target.type;
};
