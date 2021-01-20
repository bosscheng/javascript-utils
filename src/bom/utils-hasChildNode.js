/**
 * Date:2021/1/20
 * Desc:
 */
function hasChildNode(node) {
    return node.firstChild !== null;
}

function hasChildNode2(node) {
    return node.childNodes.length > 0;
}

function hasChildNode3(node) {
    return node.hasChildNodes();
}
