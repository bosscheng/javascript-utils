function utilsDataURL2Canvas(fileDataURL) {
    let img = new Image();
    img.src = fileDataURL;
    let canvas = document.createElement('canvas');

    let ctx = canvas.getContext('2d');
    img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }
}