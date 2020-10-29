/**
 * Date:2020/10/28
 * Desc: 获取字符串长度，英文字符 长度1，中文字符长度2
 */
function getStrFullLength(str) {
    return str.split('').reduce((pre, cur) => {
        const charCode = cur.charCodeAt(0);
        if (charCode >= 0 && charCode <= 128) {
            return pre + 1;
        }
        return pre + 2;
    }, 0)
}
