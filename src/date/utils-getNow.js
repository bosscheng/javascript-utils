function getNow() {
    if (performance && typeof performance.now === 'function') {
        return performance.now();
    }
    return Date.now();
}