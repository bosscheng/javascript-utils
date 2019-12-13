/*
* date: 2019-12-13
* desc:
*/
const toBlobUrl = (function () {
    const urlMap = {};

    return function (url) {

        if (urlMap[url]) {
            return Promise.resolve(urlMap[url]);
        }

        return new Promise((resolve, reject) => {

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const img = document.createElement('img');

            img.src = url;
            img.onload = () => {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);

                ctx.toBlob((blob) => {
                    const blobURL = URL.createObjectURL(blob);
                    resolve(blobURL);
                });
            };

            img.onerror = (e) => {
                reject(e);
            };
        });
    };

})();
