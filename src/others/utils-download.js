/**
 * @param {*} blob      blob数据
 * @param {string} name 下载的文件名
 * @param {string} type 下载的文件后缀
 */
function download(blob, name, type) {
    let oA = document.createElement('a');

    oA.href = window.URL.createObjectURL(blob);
    oA.download = `${ name }.${ type }`;
    oA.click();
}