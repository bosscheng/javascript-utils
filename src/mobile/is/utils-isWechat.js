/**
 * Date:2021/1/14
 * Desc:
 */
function isWechat() {
    const ua = navigator.userAgent.toLowerCase()
    return /MicroMessenger/i.test(ua)
}
