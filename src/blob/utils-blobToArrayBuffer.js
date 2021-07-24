function utilsBlobToArrayBuffer(blob) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.readAsArrayBuffer(blob)
    })
}