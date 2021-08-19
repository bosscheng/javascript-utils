/**
 *
 */
class UtilsPcmPlayer2 {
    constructor(config) {

        // 缓冲区大小，以样本帧为单位。具体来讲，缓冲区大小必须是下面这些值当中的某一个: 256, 512, 1024, 2048, 4096, 8192, 16384. 如果不传，或者参数为0，则取当前环境最合适的缓冲区大小, 取值为2的幂次方的一个常数，在该node的整个生命周期中都不变.
        // 对于 buffer size 必须是
        this.config = !!config ? config : {
            bufferSize: 512,
        };
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.scriptNode = null;
        this.gainNode = null;
        this.bufferQue = new Float32Array(0);
    }

    play() {
        // buffer size
        //
        this.scriptNode = this.audioContext.createScriptProcessor(this.config.bufferSize, 1, 1);
        this.gainNode = this.audioContext.createGain();
        this.scriptNode.connect(this.gainNode);
        this.gainNode.connect(this.audioContext.destination);
        this.scriptNode.onaudioprocess = (e) => {
            if (this.bufferLength()) {
                e.outputBuffer.getChannelData(0).set(this.read(this.config.bufferSize));
            } else {
                // 没有数据。。。。
                console.log('silence');
            }
        }
    }

    read(len) {
        const outBuffer = this.bufferQue.subarray(0, len);
        const inBuffer = this.bufferQue.subarray(len, this.bufferQue.length);
        this.bufferQue = inBuffer;
        return outBuffer;
    }

    feed(data) {
        // TODO: 此处可以使用循环队列实现，可能减少内存拷贝次数
        const len = data.length + this.bufferQue.length;
        const newBuffer = new Float32Array(len);
        newBuffer.set(this.bufferQue, 0);
        newBuffer.set(data, this.bufferQue.length);
        this.bufferQue = newBuffer;
    }

    bufferLength() {
        return this.bufferQue.length;
    }
}