function utilsEncodeWAV(bytes, inputSampleRate, outputSampleRate, numChannels, oututSampleBits, littleEdian) {

    /**
     * 在data中的offset位置开始写入str字符串
     * @param {TypedArrays} data    二进制数据
     * @param {Number}      offset  偏移量
     * @param {String}      str     字符串
     */
    function writeString(data, offset, str) {
        for (let i = 0; i < str.length; i++) {
            data.setUint8(offset + i, str.charCodeAt(i));
        }
    }

    let sampleRate = outputSampleRate > inputSampleRate ? inputSampleRate : outputSampleRate,   // 输出采样率较大时，仍使用输入的值，
        sampleBits = oututSampleBits,
        buffer = new ArrayBuffer(44 + bytes.byteLength),
        data = new DataView(buffer),
        channelCount = numChannels, // 声道
        offset = 0;

    // 资源交换文件标识符
    writeString(data, offset, 'RIFF');
    offset += 4;
    // 下个地址开始到文件尾总字节数,即文件大小-8
    data.setUint32(offset, 36 + bytes.byteLength, littleEdian);
    offset += 4;
    // WAV文件标志
    writeString(data, offset, 'WAVE');
    offset += 4;
    // 波形格式标志
    writeString(data, offset, 'fmt ');
    offset += 4;
    // 过滤字节,一般为 0x10 = 16
    data.setUint32(offset, 16, littleEdian);
    offset += 4;
    // 格式类别 (PCM形式采样数据)
    data.setUint16(offset, 1, littleEdian);
    offset += 2;
    // 声道数
    data.setUint16(offset, channelCount, littleEdian);
    offset += 2;
    // 采样率,每秒样本数,表示每个通道的播放速度
    data.setUint32(offset, sampleRate, littleEdian);
    offset += 4;
    // 波形数据传输率 (每秒平均字节数) 声道数 × 采样频率 × 采样位数 / 8
    data.setUint32(offset, channelCount * sampleRate * (sampleBits / 8), littleEdian);
    offset += 4;
    // 快数据调整数 采样一次占用字节数 声道数 × 采样位数 / 8
    data.setUint16(offset, channelCount * (sampleBits / 8), littleEdian);
    offset += 2;
    // 采样位数
    data.setUint16(offset, sampleBits, littleEdian);
    offset += 2;
    // 数据标识符
    writeString(data, offset, 'data');
    offset += 4;
    // 采样数据总数,即数据总大小-44
    data.setUint32(offset, bytes.byteLength, littleEdian);
    offset += 4;

    // 给wav头增加pcm体
    for (let i = 0; i < bytes.byteLength;) {
        data.setUint8(offset, bytes.getUint8(i));
        offset++;
        i++;
    }

    return data;
}