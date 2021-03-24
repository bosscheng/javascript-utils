function toBinary(str) {
    if (!window.atob) {
        return '';
    }
    let dec = atob(str), len = dec.length, arr = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        arr[i] = dec.charCodeAt(i);
    }

    return arr;
}