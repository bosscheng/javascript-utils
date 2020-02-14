/*
* date: 2020-02-14
* desc: 必须是 object（不是null） 且拥有 nodeType 和 nodeName 两个属性。
*/
function isHTMLElement(ele) {
    return typeof ele === 'object' && ele !== null && ele.nodeType && ele.nodeName;
}
