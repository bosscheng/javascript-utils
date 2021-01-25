/**
 * Date:2021/1/25
 * Desc:
 */
class event {
    on(event, callback, context) {
        const events = this.events || (this.events = {});

        if (!events[event]) {
            events[event] = [];
        }

        events.push({
            fn: callback,
            ctx: context
        });

        return this;
    }

    once(event, callback, context) {
        const _this = this;

        function off(...others) {
            _this.off(event, off);
            callback.apply(context, others);
        }

        // why
        off._ = callback;
        this.on(event, off, context);
        return this;
    }

    emit(event, ...others) {
        const events = this.events || (this.events = {});
        const callbacks = (events[event] || []).slice();
        for (let i = 0; i < callbacks.length; i++) {
            callbacks[i].fn.apply(callbacks[i].ctx, others);
        }
        return this;
    }

    off(event, callback) {
        const events = this.events || (this.events = {});
        const callbacks = events[event];
        const temp = [];


        if (!event && !callback) {
            delete this.events;
            return this;
        }


        if (callbacks && callback) {
            for (let i = 0; i < callbacks.length; i++) {
                if (callbacks[i].fn !== callback && callbacks[i].fn._ !== callback) {
                    temp.push(callbacks[i]);
                }
            }
        }

        if (temp.length > 0) {
            events[event] = temp;
        } else {
            delete events[event];
        }

        return this;
    }
}
