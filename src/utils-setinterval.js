/*
* date: 2019-07-28
* desc:
*/

function interval() {
    // 可避免setInterval因执行时间导致的间隔执行时间不一致
    return setTimeout(function () {
        setTimeout(arguments.callee, 500);
    }, 500);
}
