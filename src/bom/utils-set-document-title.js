/**
 * Date:2020/10/28
 * Desc:
 */
function setDocumentTitle(title) {
    document.title = title;
    const ua = navigator.userAgent;

    const regex = /\bMicroMessenger\/([\d\.]+)/
    if (regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
        const i = document.createElement('iframe')
        i.src = '/favicon.ico'
        i.style.display = 'none'
        i.onload = function () {
            setTimeout(function () {
                i.remove()
            }, 9)
        }
        document.body.appendChild(i)
    }
}
