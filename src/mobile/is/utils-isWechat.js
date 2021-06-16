/**
 * Date:2021/1/14
 * Desc:
 */
function isWechat() {
    const ua = window.navigator.userAgent;
    return /MicroMessenger/i.test(ua)
}
