/**
 * Date:2021/1/13
 * Desc:
 */

// webgl 获取glsl变量位置:
//获取Attribute位置
var a_Position = gl.getAttribLocation(program,'a_Position');
gl.enableVertexAttribArray(a_Position);

//获取Uniform位置
var u_Sampler = gl.getUniformLocation(program, 'u_Sampler');//获取位置




// 设置矩阵转换:
var mvpMatrix = new Matrix4();
mvpMatrix.setPerspective(30, 1, 1, 100);
mvpMatrix.lookAt(3, 3, 7, 0, 0, 0, 0, 1, 0);
gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements);
