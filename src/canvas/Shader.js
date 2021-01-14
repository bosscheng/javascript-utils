/**
 * Date:2021/1/13
 * Desc:
 */

`
attribute vec4 a_Position;
attribute vec2 a_TexCoord;
varying vec2 v_TexCoord;
uniform mat4 u_ProjMatrix;
uniform mat4 u_ViewMatrix;
uniform mat4 u_ModelMatrix;

void main(){ 
    gl_Position = u_ProjMatrix * u_ViewMatrix * u_ModelMatrix * a_Position;
    v_TexCoord = a_TexCoord; 
}
`

    `
precision mediump float; 
varying vec2 v_TexCoord;
uniform sampler2D u_Sampler;
void main() {
    gl_FragColor = texture2D(u_Sampler,v_TexCoord);
}
`
// webgl 编译shader
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertexStr.innerHTML);
gl.compileShader(vertexShader);

var fragShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragShader, fragStr.innerHTML);
gl.compileShader(fragShader);

var program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragShader);
gl.linkProgram(program);
gl.useProgram(program);
