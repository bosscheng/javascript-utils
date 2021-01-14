/**
 * Date:2021/1/13
 * Desc:
 */
var bufferData = new Float32Array([
    -0.5, 0.5, 0.0, 1.0,
    -0.5, -0.5, 0.0, 0.0,
    0.5, 0.5, 1.0, 1.0,
    0.5, -0.5, 1.0, 0.0
]);

var FSIZE = bufferData.BYTES_PER_ELEMENT;
var dataBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER,dataBuffer);
gl.bufferData(gl.ARRAY_BUFFER,bufferData, gl.STATIC_DRAW);
gl.vertexAttribPointer(a_Position, 2 ,gl.FLOAT,false,FSIZE * 4, FSIZE*0);
gl.vertexAttribPointer(a_TexCoord, 2 ,gl.FLOAT,false,FSIZE * 4, FSIZE*2);


gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
// POINTS（点）
// LINE_STRIP（不闭合折线）
// LINE_LOOP（闭合折线）
// LINES（独立的线段）
// TRIANGLE_STRIP（顶点按顺序相连的三角形）
// TRIANGLE_FAN（扇形顺序组合三角形）
// TRIANGLES（每三个顶点组合成一个三角形）
