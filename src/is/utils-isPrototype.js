/*
* date: 2019-09-05
* desc:
*/
const isPrototype = function(value) {
    const Ctor = value && value.constructor;
    const proto = (typeof Ctor === 'function' && Ctor.prototype) || Object.prototype;
    return value === proto;
};
