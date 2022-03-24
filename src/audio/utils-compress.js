/**
 * 数据合并压缩
 * 根据输入和输出的采样率压缩数据，
 * 比如输入的采样率是48k的，我们需要的是（输出）的是16k的，由于48k与16k是3倍关系，
 * 所以输入数据中每隔3取1位
 *
 * @param {float32array} data       [-1, 1]的pcm数据
 * @param {number} inputSampleRate  输入采样率
 * @param {number} outputSampleRate 输出采样率
 * @returns  {float32array}         压缩处理后的二进制数据
 */
function utilsCompress(data, inputSampleRate, outputSampleRate) {
    // 压缩，根据采样率进行压缩
    let rate = inputSampleRate / outputSampleRate,
        compression = Math.max(rate, 1),
        lData = data.left,
        rData = data.right,
        length = Math.floor((lData.length + rData.length) / rate),
        result = new Float32Array(length),
        index = 0,
        j = 0;

    // 循环间隔 compression 位取一位数据
    while (index < length) {
        // 取整是因为存在比例compression不是整数的情况
        let temp = Math.floor(j);

        result[index] = lData[temp];
        index++;

        if (rData.length) {
            /*
            * 双声道处理
            * e.inputBuffer.getChannelData(0)得到了左声道4096个样本数据，1是右声道的数据，
            * 此处需要组和成LRLRLR这种格式，才能正常播放，所以要处理下
            */
            result[index] = rData[temp];
            index++;
        }

        j += compression;
    }
    // 返回压缩后的一维数据
    return result;
}