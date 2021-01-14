/**
 * Date:2021/1/14
 * Desc:
 */
function isUC() {
    const ua = navigator.userAgent.toLowerCase()
    return /ucbrowser/i.test(ua)
}
