/**
 * 16进制 转 arraybuffer
 * @param hex
 * @returns {Uint8Array}
 */
function utilsHexToByteArray(hex){
    let len = hex.length >> 1;
    var bufView = new Uint8Array(len);
    for (var i = 0; i < len; i++) {
        bufView[i] = parseInt(hex.substr(i<<1,2),16);
    }
    return bufView;
}