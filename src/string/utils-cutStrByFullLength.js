/**
 * Date:2020/10/28
 * Desc:
 */
function cutStrByFullLength(str = '', maxLength) {
    let showLength = 0
    return str.split('').reduce((pre, cur) => {
        const charCode = cur.charCodeAt(0)
        if (charCode >= 0 && charCode <= 128) {
            showLength += 1
        } else {
            showLength += 2
        }
        if (showLength <= maxLength) {
            return pre + cur
        }
        return pre
    }, '')
}
