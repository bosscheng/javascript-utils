/*
* date: 2019-08-21
* desc:
*/
/*
    内部方法 遍历整个DOM节点
   */
var _walkTheDom = function walk(node, func) {
    func(node);
    node = node.firstChild;

    while (node) {
        walk(node, func);
        node = node.nextSibling;
    }
};

/*
get elements by attribute

@param attr 属性 类似于  class
@param value 值 test-node

查询的是class="test-node"的节点。
*/
var getElementsByAttribute = function (att, value) {
    var results = [];

    _walkTheDom(document.body, function (node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (typeof actual === "string" && (actual === value || typeof value !== "string")) {
            results.push(node);
        }
    });
    return results;
}
