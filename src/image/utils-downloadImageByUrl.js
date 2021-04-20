/**
 * 下载图片
 * @param htmlUrl
 * @param name
 */
function downloadImageByUrl(htmlUrl, name) {
    const alink = document.createElement('a')
    document.body.appendChild(alink)
    alink.href = htmlUrl
    alink.download = (name || Date.now()) + '.png'
    alink.click();
    document.body.removeChild(alink)
}
