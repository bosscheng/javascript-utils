/**
 * Date:2020/12/23
 * Desc:
 */
function isHidden(element) {

    if (!element) {
        return false;
    }

    const style = window.getComputedStyle(element);
    const hidden = style.display === 'none';

    // offsetParent returns null in the following situations:
    // 1. The element or its parent element has the display property set to none.
    // 2. The element has the position property set to fixed
    const parentHidden = element.offsetParent === null && style.position !== 'fixed';

    return hidden || parentHidden;
}
