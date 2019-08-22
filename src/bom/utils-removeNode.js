/*
* date: 2019-08-21
* desc:
*/
/*
@desc
   移除一个node节点
@param {string}

*/
var removeNode = function (nodeId) {
    try {
        if (typeof nodeId === "string") {
            var node = document.getElementById(nodeId);
            if (node && node.parentNode) {
                node.parentNode.removeChild(nodeId);
            }
        }
    } catch (e) {

    }
}
