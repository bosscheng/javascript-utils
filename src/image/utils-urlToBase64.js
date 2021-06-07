function urlToBase64(url,mineType){
    return new Promise((resolve,reject) =>{
        let canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const img = new Image();
        img.crossOrigin = '';
        img.onload = function(){
            if (!canvas || !ctx) {
                return reject();
            }
            canvas.height = img.height;
            canvas.width = img.width;
            ctx.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL(mineType || 'image/png');
            canvas = null;
            resolve(dataURL);
        }

        img.src = url;
    })
}