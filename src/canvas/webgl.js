/**
 * Date:2021/1/13
 * Desc: webGL是canvas基础之上的3D绘图技术，只是上下文不同，get3DContext函数作用就是依次降级获取上下文。
 */

function get3DContext(canvas, opt) {
    var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
    var context = null;
    for (var i = 0, len = names.length; i < len; i++) {
        try {
            context = canvas.getContext(names[i], opt);
        } catch (e) {
        }
        if (context) {
            break;
        }
    }
    return context;
}



