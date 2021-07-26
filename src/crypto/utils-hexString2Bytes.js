// hex数据转为base64编码格式
function utilsHexString2Bytes(str) {
    let pos = 0;
    let len = str.length;
    if (len % 2 != 0) {
        return null;
    }
    len /= 2;
    let arrBytes = new Array();
    for (let i = 0; i < len; i++) {
        let s = str.substr(pos, 2);
        // 16进制
        let v = parseInt(s, 16);
        arrBytes.push(v);
        pos += 2;
    }
    return new Uint8Array(arrBytes);
}