function getFileContent(file) {
    return new Promise(function (resolve, reject) {
        const fileReader = new FileReader();
        fileReader.readAsText(file, 'utf-8');
        fileReader.onload = function (e) {
            let fileText = e.target.result;
            resolve(fileText);
        };

        fileReader.onerror = function () {
            reject('file reader error');
        };

        fileReader.onabort = function () {
            reject('file reader abort error');
        };
    })
}