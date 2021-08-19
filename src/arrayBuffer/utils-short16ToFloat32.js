function utilsShort16ToFloat32(buffer) {
    let inputSamples = buffer.length;
    // new
    let output = new Float32Array(inputSamples);

    for (let i = 0; i != inputSamples; ++i) {
        output[i] = buffer[i] / 32768;
    }
    return output;
}