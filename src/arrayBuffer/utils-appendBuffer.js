function utilsAppendBuffer(buffer1, buffer2) {
    let temp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
    temp.set(new Uint8Array(buffer1), 0);
    temp.set(new Uint8Array(buffer2), buffer1.byteLength);

    return temp;
}