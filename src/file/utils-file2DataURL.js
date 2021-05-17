function file2DataURL(file) {
    return new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            resolve(e.target.result);
        }

        reader.onerror = (err) => {
            reject(err);
        }
    })
}