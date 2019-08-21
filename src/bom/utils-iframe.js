/**
 * reject iframe
 *
 * @desc
 *  同时满足：
 *
 *  1. parent == self
 *  2. parent.document.domain == document.domain || (document.referrer && 合法的 referrer)
 *
 *
 */
function rejectIframe() {
    var legalUrl = /^http(s)?:\/\/[.\w-]+\.xxx\.com\//i;
    try {
        if (parent != self && (parent.document.domain != document.domain || document.referrer && !legalUrl.test(document.referrer))) throw new Error("can't be iframed")
    } catch (e) {
        window.open(location.href, "_top")
    }
}
