function EventBus() {

}


EventBus.prototype.on = function (events, callback) {
    var cache, event, list;
    if (!callback) return this;
    cache = this.__events || (this.__events = {});
    events = events.split(eventSplitter);
    while (event = events.shift()) {
        list = cache[event] || (cache[event] = []);
        list.push(callback);
    }
    return this;
}

EventBus.prototype.off = function () {
    var cache;
    if (!(cache = this.__events)) return this;
    delete this.__events;
    return this;
}

EventBus.prototype.trigger = function (events) {

    // Execute callbacks
    function _callEach(list, args, context) {
        if (list) {
            for (var i = 0, len = list.length; i < len; i += 1) {
                list[i].apply(context, args);
            }
        }
    }

    var cache, event, all, list, i, len, rest = [], args;
    if (!(cache = this.__events)) return this;
    events = events.split(eventSplitter);
    // Fill up `rest` with the callback arguments.  Since we're only copying
    // the tail of `arguments`, a loop is much faster than Array#slice.
    for (i = 1, len = arguments.length; i < len; i++) {
        rest[i - 1] = arguments[i];
    }
    // For each event, walk through the list of callbacks twice, first to
    // trigger the event, then to trigger any `"all"` callbacks.
    while (event = events.shift()) {
        if (list = cache[event]) list = list.slice();
        // Execute event callbacks.
        _callEach(list, rest, this);
    }
    return this;
}
