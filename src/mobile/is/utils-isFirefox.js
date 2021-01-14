/**
 * Date:2021/1/14
 * Desc:
 */


function isFirefox() {
    const ua = navigator.userAgent.toLowerCase()
    return /firefox/i.test(ua)
}
