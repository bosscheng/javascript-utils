
function isWindow(value) {
    var toString = Object.prototype.toString;
    return typeof window !== "undefined" && toString.call(value) === '[object Window]'
}