/**
 *
 * @param el
 * @param target
 */
function getOffset(evt, target = null) {
    const {
        clientX,
        clientY,
        currentTarget
    } = evt;

    const current = target || currentTarget
    const {
        left,
        top
    } = current.getBoundingClientRect()

    return [clientX - left, clientY - top]
}