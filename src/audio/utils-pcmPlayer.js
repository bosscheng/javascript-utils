class UtilsPcmPlayer {
    /**
     *
     * @param channels 通道数
     * @param sampleRate 采样率
     */
    constructor(channels, sampleRate) {
        // pcm 数据对象。
        this._samples = new Float32Array();
        //  间隔时间
        this._flushingTime = 200;
        // 通道数量
        this._channels = channels;
        // 采样率
        this._sampleRate = sampleRate;
        // 执行函数。
        this._flush = this._flush.bind(this);
        // audio context 对象
        this._audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        // gain node 对象
        this._gainNode = this._audioCtx.createGain();
        // 默认声音大小
        this._gainNode.gain.value = 1;
        // 连接扬声器
        this._gainNode.connect(this._audioCtx.destination);
        // current time
        this._startTime = this._audioCtx.currentTime;
        // flush
        this._interval = setInterval(this._flush, this._flushingTime);
    }

    setVolume(volume) {
        this._gainNode.gain.value = volume;
    }

    close() {
        if (this._interval) {
            clearInterval(this._interval);
        }
        this._audioCtx.close();
    };

    // feed 投喂食物
    feed(data) {
        // 不断添加数据，生成一个新的 buffer 对象。
        let tmp = new Float32Array(this._samples.length + data.length);
        tmp.set(this._samples, 0);
        tmp.set(data, this._samples.length);
        this._samples = tmp;
    };

    _flush() {
        // 当为空的时候，不执行。
        if (!this._channels || !this._sampleRate || !this._samples.length) {
            return;
        }
        // 调用的是 buffer source
        let bufferSource = this._audioCtx.createBufferSource();
        // 长度。。。
        let length = this._samples.length / this._channels;

        let audioBuffer = this._audioCtx.createBuffer(this._channels, length, this._sampleRate);

        for (let channel = 0; channel != this._channels; ++channel) {
            let audioData = audioBuffer.getChannelData(channel);
            let offset = channel;
            let decrement = 50;
            for (let i = 0; i != length; ++i) {
                audioData[i] = this._samples[offset];
                if (i < 50) {
                    audioData[i] = (audioData[i] * i) / 50;
                }
                if (i >= (length - 51)) {
                    audioData[i] = (audioData[i] * decrement--) / 50;
                }
                offset += this._channels;
            }
        }
        //
        if (this._startTime < this._audioCtx.currentTime) {
            this._startTime = this._audioCtx.currentTime;
        }
        bufferSource.buffer = audioBuffer;
        bufferSource.playbackRate.value = 1.2
        bufferSource.connect(this._gainNode);
        bufferSource.start(this._startTime);
        // 添加持续时间。
        this._startTime += audioBuffer.duration;
        // 设置为空。。。
        this._samples = new Float32Array();
    }
}