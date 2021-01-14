/**
 * Date:2021/1/14
 * Desc:
 */
function isTencentGroup() {
    const ua = navigator.userAgent.toLowerCase()
    return /MQQBrowser/i.test(ua)
}
