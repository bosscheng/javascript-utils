class UtilsWav {
    constructor() {


        this.recLength = 0;
        this.recBuffersL = [];
        this.recBuffersR = [];
        this.sampleRate = null;
    }

    init(config) {
        this.sampleRate = config.sampleRate;
    }

    record(inputBuffer) {
        this.recBuffersL.push(inputBuffer[0]);
        this.recBuffersR.push(inputBuffer[1]);
        this.recLength += inputBuffer[0].length;
    }

    exportWAV(type) {
        var bufferL = this._mergeBuffers(recBuffersL, recLength);
        var bufferR = this._mergeBuffers(recBuffersR, recLength);
        var interleaved = this._interleave(bufferL, bufferR);
        var dataview = this._encodeWAV(interleaved);
        var audioBlob = new Blob([dataview], {type: type});

        return audioBlob;
    }

    getBuffer() {
        var buffers = [];
        buffers.push(this._mergeBuffers(recBuffersL, recLength));
        buffers.push(this._mergeBuffers(recBuffersR, recLength));
        return buffers;
    }

    clear() {
        this.recLength = 0;
        this.recBuffersL = [];
        this.recBuffersR = [];
    }

    _mergeBuffers(recBuffers, recLength) {
        var result = new Float32Array(recLength);
        var offset = 0;
        for (var i = 0; i < recBuffers.length; i++) {
            result.set(recBuffers[i], offset);
            offset += recBuffers[i].length;
        }
        return result;
    }

    _interleave(inputL, inputR) {
        var length = inputL.length + inputR.length;
        var result = new Float32Array(length);

        var index = 0,
            inputIndex = 0;

        while (index < length) {
            result[index++] = inputL[inputIndex];
            result[index++] = inputR[inputIndex];
            inputIndex++;
        }
        return result;
    }

    _encodeWAV(samples) {
        var buffer = new ArrayBuffer(44 + samples.length * 2);
        var view = new DataView(buffer);

        /* RIFF identifier */
        this._writeString(view, 0, 'RIFF');
        /* RIFF chunk length */
        view.setUint32(4, 36 + samples.length * 2, true);
        /* RIFF type */
        this._writeString(view, 8, 'WAVE');
        /* format chunk identifier */
        this._writeString(view, 12, 'fmt ');
        /* format chunk length */
        view.setUint32(16, 16, true);
        /* sample format (raw) */
        view.setUint16(20, 1, true);
        /* channel count */
        view.setUint16(22, 2, true);
        /* sample rate */
        view.setUint32(24, sampleRate, true);
        /* byte rate (sample rate * block align) */
        view.setUint32(28, sampleRate * 4, true);
        /* block align (channel count * bytes per sample) */
        view.setUint16(32, 4, true);
        /* bits per sample */
        view.setUint16(34, 16, true);
        /* data chunk identifier */
        this._writeString(view, 36, 'data');
        /* data chunk length */
        view.setUint32(40, samples.length * 2, true);

        this._floatTo16BitPCM(view, 44, samples);

        return view;
    }

    _floatTo16BitPCM(output, offset, input){
        for (var i = 0; i < input.length; i++, offset += 2) {
            var s = Math.max(-1, Math.min(1, input[i]));
            output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        }
    }

    _writeString(view, offset, string){
        for (var i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    }


}