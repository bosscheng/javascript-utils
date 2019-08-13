/*
    内部方法 遍历整个DOM节点
   */
var walkTheDom = function walk(node, func) {
    func(node);
    node = node.firstChild;

    while (node) {
        walk(node, func);
        node = node.nextSibling;
    }
}
