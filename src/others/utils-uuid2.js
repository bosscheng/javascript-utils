/**
 * Date:2021/1/14
 * Desc: 13位的uuid
 */
function uuid() {
    return 'xxxxxxxx-4xxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}
