class WebglDrawer{
    constructor($canvas) {
        this.$canvas = $canvas;

        this.contextGL = null;

        this.shaderProgram = null;

        this.texturePosBuffer = null;

        this.yTextureRef = null;
        this.uTextureRef = null;
        this.vTextureRef = null;

        this._initContextGL();

        if (this.contextGL) {
            this._initProgram();
            this._initBuffers();
            this._initTextures();
        }

    }

    static isSupport() {
        const canvas = document.createElement('canvas');
        const validContextNames = [
            'webgl',
            'experimental-webgl',
            'moz-webgl',
            'webkit-3d'
        ];

        let gl = null;
        let nameIndex = 0;
        while (!gl && nameIndex < validContextNames.length) {
            var contextName = validContextNames[nameIndex];
            try {
                gl = canvas.getContext(contextName, { preserveDrawingBuffer: true });
            } catch (e) {
                gl = null;
            }
            if (!gl || typeof gl.getParameter !== 'function') {
                gl = null;
            }
            ++nameIndex;
        }

        return !!gl;
    }


    // draw next output picture
    // data 即为解码后的帧数据，width、height分别为视频画面的宽和高
    drawNextOutputPicture(width, height, data) {
        const { yTextureRef, uTextureRef, vTextureRef } = this;
        const gl = this.contextGL;
        gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
        //
        gl.viewport(0, 0, width, height);

        const i420Data = data;
        // 根据前面YUV的说明已经清楚，有多少个像素就有多少y分量，所以y分量数据长度=宽*高
        const yDataLength = width * height;
        const yData = i420Data.subarray(0, yDataLength);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, yTextureRef);
        // 指明纹理的具体属性
        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.LUMINANCE,
            width,
            height,
            0,
            gl.LUMINANCE,
            gl.UNSIGNED_BYTE,
            yData
        );
        // 420模式下u和v都为y分量的1/4.
        const cbDataLength = width * height / 4;
        const cbData = i420Data.subarray(yDataLength, yDataLength + cbDataLength);
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, uTextureRef);
        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.LUMINANCE,
            width / 2,
            height / 2,
            0,
            gl.LUMINANCE,
            gl.UNSIGNED_BYTE,
            cbData
        );

        const crDataLength = cbDataLength;
        const crData = i420Data.subarray(
            yDataLength + cbDataLength,
            yDataLength + cbDataLength + crDataLength
        );

        gl.activeTexture(gl.TEXTURE2);
        gl.bindTexture(gl.TEXTURE_2D, vTextureRef);
        gl.texImage2D(
            gl.TEXTURE_2D,
            0,
            gl.LUMINANCE,
            width / 2,
            height / 2,
            0,
            gl.LUMINANCE,
            gl.UNSIGNED_BYTE,
            crData
        );
        // 按照多个三角形的方式绘制，从顶点0开始绘制，总计6个顶点
        // gl.drawArrays(gl.TRIANGLES, 0, 6)
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }

    destroy() {
        try {
            this.contextGL.getExtension('WEBGL_lose_context').loseContext();
        } catch (e) {}

        this.$canvas = null;
        this.contextGL = null;
        this.shaderProgram = null;
        this.texturePosBuffer = null;
        this.yTextureRef = null;
        this.uTextureRef = null;
        this.vTextureRef = null;
    }

    // init context gl
    _initContextGL() {
        const canvas = this.$canvas;
        const validContextNames = [
            'webgl',
            'experimental-webgl',
            'moz-webgl',
            'webkit-3d'
        ];

        let gl = null;
        let nameIndex = 0;
        while (!gl && nameIndex < validContextNames.length) {
            var contextName = validContextNames[nameIndex];
            try {
                gl = canvas.getContext(contextName);
            } catch (e) {
                gl = null;
            }
            if (!gl || typeof gl.getParameter !== 'function') {
                gl = null;
            }
            ++nameIndex;
        }

        this.contextGL = gl;
    }

    _initProgram() {
        const gl = this.contextGL;
        // vertexShaderScript420 代码负责接收设置顶点坐标、接收并传递纹理坐标
        /**
         *
         attribute vec4 vertexPos;  // 顶点坐标
         attribute vec4 texturePos;  // 纹理坐标
         varying vec2 textureCoord;  // 传递纹理坐标
         void main(){
            gl_Position = vertexPos; // 设置顶点坐标
            textureCoord = texturePos.xy;  // 设置纹理坐标
         }
         *
         */
        const vertexShaderScript = `
    attribute vec4 vertexPos;
    attribute vec4 texturePos;
    varying vec2 textureCoord;
    void main(){
        gl_Position = vertexPos; 
        textureCoord = texturePos.xy;
    }
    `;
        /**
         * fragmentShaderScript420 代码负责接收yuv纹理贴图数据并通过转换公式（GLSL支持矩阵向量乘法运算）将YUV转换成RGB。
         // 片断着色器没有默认精度，所以我们需要设置一个精度
         // 这里选择高精度
         precision highp float;
         varying highp vec2 textureCoord;   // 接收纹理坐标
         uniform sampler2D ySampler;   // y图片纹理数据取样器
         uniform sampler2D uSampler;   // u...
         uniform sampler2D vSampler;   // v...
         const mat4 YUV2RGB = mat4(
             1.1643828125, 0, 1.59602734375, -.87078515625,
             1.1643828125, -.39176171875, -.81296875, .52959375,
             1.1643828125, 2.017234375, 0, -1.081390625,
             0, 0, 0, 1
         );    // YUV 转 RGB 的数学计算公式。

         void main(void) {
            highp float y = texture2D(ySampler,  textureCoord).r; // .r等同于.x、.s、[0]
            highp float u = texture2D(uSampler,  textureCoord).r;
            highp float v = texture2D(vSampler,  textureCoord).r;
            // gl_FragColor是一个片断着色器主要设置的变量，后面则是矩阵运算，将YUV转换成RGB
            gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;
        }
         *
         */
        const fragmentShaderScript = `
    precision highp float;
    varying highp vec2 textureCoord;
    uniform sampler2D ySampler;
    uniform sampler2D uSampler;
    uniform sampler2D vSampler;
    const mat4 YUV2RGB = mat4(
        1.1643828125, 0, 1.59602734375, -.87078515625,
        1.1643828125, -.39176171875, -.81296875, .52959375,
        1.1643828125, 2.017234375, 0, -1.081390625,
        0, 0, 0, 1
    );

    void main(void) {
        highp float y = texture2D(ySampler,  textureCoord).r;
        highp float u = texture2D(uSampler,  textureCoord).r;
        highp float v = texture2D(vSampler,  textureCoord).r;
        gl_FragColor = vec4(y, u, v, 1) * YUV2RGB;
    }
    `;

        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, vertexShaderScript);
        gl.compileShader(vertexShader);
        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            console.log(
                'Vertex shader failed to compile: ' + gl.getShaderInfoLog(vertexShader)
            );
        }

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, fragmentShaderScript);
        gl.compileShader(fragmentShader);
        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            console.log(
                'Fragment shader failed to compile: ' +
                gl.getShaderInfoLog(fragmentShader)
            );
        }

        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.log(
                'Program failed to compile: ' + gl.getProgramInfoLog(program)
            );
        }

        gl.useProgram(program);
        this.shaderProgram = program;
    }

    _initBuffers() {
        const gl = this.contextGL;
        const program = this.shaderProgram;
        const vertexPosBuffer = gl.createBuffer();
        // 创建缓冲并存入相关顶点数据
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexPosBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([1, 1, -1, 1, 1, -1, -1, -1]),
            gl.STATIC_DRAW
        );
        // 找到顶点坐标属性(Attribute)的地址
        const vertexPosRef = gl.getAttribLocation(program, 'vertexPos');
        // 告诉WebGL怎么从缓冲中获取数据传递给属性
        gl.enableVertexAttribArray(vertexPosRef);
        // (属性地址, 坐标数, 32位浮点数, 不标准化, stride, offset)
        gl.vertexAttribPointer(vertexPosRef, 2, gl.FLOAT, false, 0, 0);

        const texturePosBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, texturePosBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([1, 0, 0, 0, 1, 1, 0, 1]),
            gl.STATIC_DRAW
        );

        var texturePosRef = gl.getAttribLocation(program, 'texturePos');
        gl.enableVertexAttribArray(texturePosRef);
        gl.vertexAttribPointer(texturePosRef, 2, gl.FLOAT, false, 0, 0);

        this.texturePosBuffer = texturePosBuffer;
    }

    _initTextures() {
        const gl = this.contextGL;
        const program = this.shaderProgram;

        const yTextureRef = this._initTexture();
        // 找到ySampler地址，并告诉sampler取样器使用第0个纹理单元，即gl.TEXTURE0
        const ySamplerRef = gl.getUniformLocation(program, 'ySampler');
        gl.uniform1i(ySamplerRef, 0);
        this.yTextureRef = yTextureRef;

        const uTextureRef = this._initTexture();
        const uSamplerRef = gl.getUniformLocation(program, 'uSampler');
        gl.uniform1i(uSamplerRef, 1);
        this.uTextureRef = uTextureRef;

        const vTextureRef = this._initTexture();
        const vSamplerRef = gl.getUniformLocation(program, 'vSampler');
        gl.uniform1i(vSamplerRef, 2);
        this.vTextureRef = vTextureRef;
    }

    _initTexture() {
        const gl = this.contextGL;
        const textureRef = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, textureRef);
        // 当放大时选择4个像素混合
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        // 当缩小时选择4个像素混合
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        // 表示U方向不需要重复贴图
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        // 表示V方向不需要重复贴图
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

        gl.bindTexture(gl.TEXTURE_2D, null);

        return textureRef;
    }
}