/*
* date: 2019-06-12
* desc:
*/
function uuid() {
    // return (+new Date() * 1e6 + Math.floor(Math.random() * 1e6)).toString(36);
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0; var v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}
