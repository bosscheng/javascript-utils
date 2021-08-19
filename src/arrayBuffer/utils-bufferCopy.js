// 修改buffer1的数据
function utilsBufferCopy(buffer1, buffer1Offset, buffer2, buffer2Begin, buffer2End) {
    buffer1.set(buffer2.subarray(buffer2Begin, buffer2End), buffer1Offset);
}