/**
 * 转换到我们需要的对应格式的编码
 * 主要是转换 采样位数
 *
 * @param {float32array} bytes      pcm二进制数据
 * @param {number}  sampleBits      采样位数 8  16
 * @param {boolean} littleEdian     是否是小端字节序
 * @returns {dataview}              pcm二进制数据
 */
function utilsEncodePCM(bytes,sampleBits,littleEdian){
    let offset = 0,
        dataLength = bytes.length * (sampleBits / 8),
        buffer = new ArrayBuffer(dataLength),
        data = new DataView(buffer);

    // 写入采样数据
    if (sampleBits === 8) {
        for (let i = 0; i < bytes.length; i++, offset++) {
            // 范围[-1, 1]
            let s = Math.max(-1, Math.min(1, bytes[i]));
            // 8位采样位划分成2^8=256份，它的范围是0-255;
            // 对于8位的话，负数*128，正数*127，然后整体向上平移128(+128)，即可得到[0,255]范围的数据。
            let val = s < 0 ? s * 128 : s * 127;
            val = +val + 128;
            data.setInt8(offset, val);
        }
    } else {
        // 16位
        for (let i = 0; i < bytes.length; i++, offset += 2) {
            let s = Math.max(-1, Math.min(1, bytes[i]));
            // 16位的划分的是2^16=65536份，范围是-32768到32767
            // 因为我们收集的数据范围在[-1,1]，那么你想转换成16位的话，只需要对负数*32768,对正数*32767,即可得到范围在[-32768,32767]的数据。
            data.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, littleEdian);
        }
    }

    return data;
}