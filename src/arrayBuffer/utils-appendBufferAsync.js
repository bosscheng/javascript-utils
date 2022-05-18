function utilsAppendBufferAsync(buffer1, buffer2) {
    return new Promise((resolve, reject) => {
        let blob = new Blob([buffer1, buffer2]);
        let reader = new FileReader();
        reader.addEventListener("loadend", function () {
            resolve();
        });
        reader.readAsArrayBuffer(blob);
    });
}