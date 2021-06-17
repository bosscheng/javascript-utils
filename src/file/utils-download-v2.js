/**
 * @desc 根据 src 下载文件 (支持，base64)
 * @param src 文件资源src
 * @param name
 */
function download(src, name) {
    const link = document.createElement('a');
    link.style.display = 'none';
    link.download = name;
    link.href = src;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
