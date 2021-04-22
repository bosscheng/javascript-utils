/**
 * @desc 根据 src 下载文件 (支持，base64)
 * @param src 文件资源src
 * @param name
 */
function download(src, name) {
    const link = document.createElement('a');
    link.download = name;
    link.href = src;
    link.click();
}
