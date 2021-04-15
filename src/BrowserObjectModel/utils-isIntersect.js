function isIntersect({clientX, clientY}, target) {
    const {
        top,
        right,
        bottom,
        left
    } = target.getBoundingClientRect()

    return top < clientY
        && right > clientX
        && bottom > clientY
        && left < clientX
}