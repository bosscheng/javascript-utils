function utilsFloat32ToShort16(buffer){
    let inputSamples = buffer.length;
    let output = new Int16Array(inputSamples);
    for (let i = 0; i != inputSamples; ++i) {
        output[i] = buffer[i] * 32768;
    }
    return output;
}