/**
 * Date:2021/1/14
 * Desc:
 */

function getMediaSource () {
    return window.MediaSource || window.WebKitMediaSource
}
const WEB_SUPPORT_H264_CODEC = 'video/mp4; codecs="avc1.42E01E,mp4a.40.2"'

// mse h264 support
function isMSESupported() {
    const mediaSource = getMediaSource()
    const sourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer
    const isTypeSupported = mediaSource &&
        typeof mediaSource.isTypeSupported === 'function' &&
        mediaSource.isTypeSupported(WEB_SUPPORT_H264_CODEC)

    // if SourceBuffer is exposed ensure its API is valid
    // safari and old version of Chrome doe not expose SourceBuffer globally so checking SourceBuffer.prototype is impossible
    const sourceBufferValidAPI = !sourceBuffer ||
        (sourceBuffer.prototype &&
            typeof sourceBuffer.prototype.appendBuffer === 'function' &&
            typeof sourceBuffer.prototype.remove === 'function')
    return !!isTypeSupported && !!sourceBufferValidAPI
}
