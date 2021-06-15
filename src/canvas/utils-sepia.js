/**
 * 改变图片颜色底色。变成深褐色
 * @param ctx
 * @param img
 */
function utilsSepia(ctx, img, width, height) {
    ctx.drawImage(img, 0, 0);

    const imageData = ctx.getImageData(0, 0, width, height);

    const data = imageData.data;

    for (var i = 0; i < data.length; i += 4) {
        let red = data[i], green = data[i + 1], blue = data[i + 2];

        data[i] = Math.min(Math.round(0.393 * red + 0.769 * green + 0.189 * blue), 255);
        data[i + 1] = Math.min(Math.round(0.349 * red + 0.686 * green + 0.168 * blue), 255);
        data[i + 2] = Math.min(Math.round(0.272 * red + 0.534 * green + 0.131 * blue), 255);
    }
    //
    ctx.putImageData(imageData, 0, 0)
}