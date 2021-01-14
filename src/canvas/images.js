/**
 * Date:2021/1/13
 * Desc:
 */

// 绑定图像:
gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,1);
gl.activeTexture(gl.TEXTURE0);
var texture = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D,texture);
gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
gl.texImage2D(gl.TEXTURE_2D,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,img1);
gl.uniform1i(u_Sampler,0);
