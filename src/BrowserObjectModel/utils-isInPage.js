/**
 * Date:2021/1/20
 * Desc:检查一个元素是否是body元素的后代元素且非body元素本身.
 */
function isInPage(node) {
    return (node === document.body) ? false : document.body.contains(node);
}
