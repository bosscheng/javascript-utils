/**
 * @desc
 *      float32位pcm 转换成 int16位pcm
 * @param output 输出 buffer
 * @param offset 偏移量
 * @param input 输入 buffer
 */
function float32To16BitPCM(output, offset, input) {
    for (var i = 0; i < input.length; i++, offset += 2) {
        var s = Math.max(-1, Math.min(1, input[i]));
        output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
    }
}