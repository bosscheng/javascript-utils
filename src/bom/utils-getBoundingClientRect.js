/*
* date: 2019-09-01
* desc:
*/
function getBoundingClientRect(node) {
    if (node && node.getBoundingClientRect) {
        const rect = node.getBoundingClientRect();
        const top = document.documentElement.clientTop;
        const left = document.documentElement.clientLeft;
        return {
            top: rect.top - top,
            bottom: rect.bottom - top,
            left: rect.left - left,
            right: rect.right - left
        }
    }

    return null;
}
