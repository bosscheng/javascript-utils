/**
 * Date:2020/11/18
 * Desc:
 */

function base64ToArrayBuffer(base64) {
    var binary = window.atob(base64);
    var length = binary.length;
    var bytes = new Uint8Array(length);
    for (var i = 0; i < length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
}
