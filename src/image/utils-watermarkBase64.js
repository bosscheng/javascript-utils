function _getBase64FileType(base64) {
    const arr = base64.split(",");
    const type = arr[0].replace("data:", "").replace(";base64", "");
    return type;
}

function watermarkBase64(base64, watermark) {
    return new Promise((resolve, reject) => {
        let canvas = document.createElement('canvas');
        let ctx = canvas.getContext("2d");
        let image = new Image();
        image.onload = function () {
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
            ctx.restore()
            if (watermark && watermark.text) {
                watermark = Object.assign({
                    left: 20,
                    top: image.height - 20,
                    text: "",
                    font: "16px \u5b8b\u4f53",
                    fillColor: "#FFFFFF",
                    strokeColor: "#FFFFFF"
                }, watermark);

                ctx.font = watermark.font;

                if (watermark.fillColor) {
                    ctx.fillStyle = watermark.fillColor;
                    ctx.fillText(watermark.text, watermark.left, watermark.top);
                }

                if (watermark.strokeColor) {
                    ctx.strokeStyle = watermark.strokeColor;
                    ctx.strokeText(watermark.text, watermark.left, watermark.top);
                }
                ctx.stroke();
                const type = _getBase64FileType(base64);
                try {
                    const dataUrl = canvas.toDataURL(type, 1);
                    resolve(dataUrl);
                } catch (e) {
                    reject(e);
                }
            }
        };
        image.onerror = function () {
            reject('illegal image base64');
        };

        image.src = base64;
    })
}