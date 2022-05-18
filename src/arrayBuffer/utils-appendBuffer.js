// 不修改 原始数据。
function utilsAppendBuffer(buffer1, buffer2) {
    // 创建一个两个length 相加的 buffer
    let temp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
    // 从0位置添加
    temp.set(new Uint8Array(buffer1), 0);
    // 从 buffer1.byteLength 位置添加
    temp.set(new Uint8Array(buffer2), buffer1.byteLength);

    // 返回大而全的数据。
    return temp;
}

function utilsAppendBuffer$1(buffer1, buffer2) {
    let tmp = new Uint8Array((buffer1.byteLength | 0) + (buffer2.byteLength | 0));
    tmp.set(buffer1, 0);
    tmp.set(buffer2, buffer1.byteLength | 0);
    return tmp;
}

