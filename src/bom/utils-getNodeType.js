/*
* date: 2019-08-21
* desc:
*/

/**
 * @desc
 *
 * @param node
 *
 * element(元素) 1
 * attr（属性） 2
 * text（文本） 3
 * comments（注释） 8
 * document （文档）9
 */
var getNodeType = function (node) {
    var result = null;
    if (node.nodeType) {
        switch (node.nodeType) {
            case 1:
                result = 'element';
                break;
            case 2:
                result = 'attr';
                break;
            case 3:
                result = 'text'; // 文本节点
                break;
            case 8:
                result = 'comments';
                break;
            case 9:
                result = 'document';
                break;
            default:
                break;
        }
    }

    return result;
}
