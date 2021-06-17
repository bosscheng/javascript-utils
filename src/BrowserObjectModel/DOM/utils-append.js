function append(parent, child) {
    if (child instanceof Element) {
        parent.appendChild(child);
    } else {
        parent.insertAdjacentHTML('beforeend', String(child));
    }
    //
    return parent.lastElementChild || parent.lastChild;
}