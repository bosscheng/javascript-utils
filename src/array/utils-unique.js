/*
 * 清除相同的数组
 * */
var unique = function (array) {
    var x = array.split(/[\r\n]+/);
    var y = '';
    for (var i = 0; i < x.length; i++) {
        if (!new RegExp("^" + x.replace(/([^\w])/ig, "\\$1") + "$", "igm").test(y)) {
            y += x + "\r\n"
        }
    }
    return y
}
