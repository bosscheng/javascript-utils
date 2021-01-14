/**
 * Date:2021/1/13
 * Desc:
 */

var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
gl.clearColor(0.0, 0.0, 0.0, 1.0);
gl.enable(gl.DEPTH_TEST);
gl.clear(gl.COLOR_BUFFER_BIT| gl.DEPTH_BUFFER_BIT);
