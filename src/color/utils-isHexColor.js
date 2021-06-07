/**
 * 判断是否 十六进制颜色值.
 * 输入形式可为 #fff000 #f00
 * @param [String] color 十六进制颜色值
 * @returns {boolean}
 */
function isHexColor(color){
    const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/;
    return reg.test(color);
}