function readyBinary(arr) {
    let _arr = new Uint8Array(arr);
    let len = _arr.length;
    let str = '';
    for (let i = 0; i < len; i++) {
        str += _arr[i];
    }

    return str;
}