function utilsIsArrayBuffer(data){
    return (data.byteLength && data.buffer && data.buffer.constructor === ArrayBuffer);
}