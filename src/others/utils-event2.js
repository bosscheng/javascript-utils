/*
* date: 2019-07-28
* desc:
*/
class EventEmitter {
    constructor() {
        this.events = this.events || new Map();
    }

    on(type, fn) {
        if (!this.events.get(type)) {
            this.events.set(type, fn);
        }
    }

    trigger(type) {
        let handle = this.events.get(type);
        handle.apply(this, [...arguments].slice(1));
    }
}

