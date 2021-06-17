/**
 *
 * @param selector
 * @param parent
 * @returns {*}
 */
function query(selector, parent = document) {
    return parent.querySelector(selector);
}