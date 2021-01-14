/**
 * Date:2021/1/13
 * Desc:
 */
var indices = new Uint8Array([
    0, 1, 2,   0, 2, 3,    // front
    0, 3, 4,   0, 4, 5,    // right
    0, 5, 6,   0, 6, 1,    // up
    1, 6, 7,   1, 7, 2,    // left
    7, 4, 3,   7, 3, 2,    // down
    4, 7, 6,   4, 6, 5     // back
]);
var indexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0);
// POINTS（点）
// LINE_STRIP（不闭合折线）
// LINE_LOOP（闭合折线）
// LINES（独立的线段）
// TRIANGLE_STRIP（顶点按顺序相连的三角形）
// TRIANGLE_FAN（扇形顺序组合三角形）
// TRIANGLES（每三个顶点组合成一个三角形）
