/**
 * Date:2020/11/18
 * Desc:
 */
function bytes2HexString(byte) {
    let hexs = "";
    for (let i = 0; i < byte.length; i++) {
        let hex = (byte[i]).toString(16);
        if (hex.length === 1) {
            hex = '0' + hex;
        }
        hexs += hex.toUpperCase();
    }
    return hexs;
}
