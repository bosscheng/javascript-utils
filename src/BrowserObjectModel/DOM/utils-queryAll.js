function queryAll(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
}