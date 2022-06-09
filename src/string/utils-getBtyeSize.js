/**
 * 获取字节大小。
 * @param str
 * @returns {number}
 */
function utilsGetBtyeSize(str) {
    return new Blob([str]).size;
}