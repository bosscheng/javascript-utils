function random$2(mix, max) {
    if (arguments.length === 1) {
        return Math.floor(Math.random() * min + 1);
    }
    return Math.floor(Math.random() * (max - min + 1) + min)
}