/**
 * 检查图片是否是纯色图
 * @param ctx
 * @param width
 * @param height
 * @returns {boolean}
 */
function utilsCheckImagePureColor(ctx, width, height) {
    const imgData = ctx.getImageData(0, 0, width, height);
    const imgDataContent = imgData.data;
    const rgbObj = {};
    let differentLen = 0;
    /**
     * canvas通过imgDataContent获取到的值是一个Uint8ClampedArray的类型化数组
     * 每一个值存储的是0-255的整型
     * 每4个为一组，分别代表 R G B A
     *
     * 整体的思路为遍历整个数组，如果发现颜色值的种类超过配置的数量，即为有图像的图，否则为纯色图
     */
    for (let i = 0, len = imgDataContent.length; i < len; i += 4) {
        const key = imgDataContent.slice(i, i + 4).join("");

        if (!rgbObj[key]) {
            rgbObj[key] = 1;
            differentLen++;
        }

        // 判断如果颜色超出100种，不是纯图
        if (differentLen > 100) {
            return true;
        }
    }

    return false;
}
