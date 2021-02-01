/**
 * Date:2021/2/1
 * Desc:
 * @param blob {Blob} 文件流
 * @param outName {string} blob, outName
 */
function downloadBlob(blob, outName) {
    var reader = new FileReader();
    reader.onload = function (e) {
        const link = document.createElement('a')
        link.download = outName
        link.href = e.target.result
        link.click()
    }

    reader.readAsDataURL(blob);
}
