function uint8Array2String(dataArray){
    let dataString = '';
    for (const element of dataArray) {
        dataString += String.fromCharCode(element);
    }
    return dataString;
}