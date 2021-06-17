function sleep$2(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}