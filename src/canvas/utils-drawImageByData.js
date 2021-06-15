/**
 *
 * @param ctx
 * @param imageBuffer RGB 三通道数据，需要补上A通道。
 * @param width
 * @param height
 */
function utilsDrawImageByData(ctx, imageBuffer, width, height) {
    let imageData = ctx.createImageData(width, height);
    let j = 0;
    for (let i = 0; i < imageBuffer.length; i++) {
        if (i && i % 3 === 0) {
            imageData.data[j] = 255;
            j += 1;
        }
        imageData.data[j] = imageBuffer[i];
        j += 1;
    }
    ctx.putImageData(imageData, 0, 0, 0, 0, width, height);
}