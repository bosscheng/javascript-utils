function cancelAnimationFrame(id) {
    const method = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || function (id) {
        return clearTimeout(id);
    };

    return method(id);
}