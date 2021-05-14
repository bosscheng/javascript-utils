function isMediaRecorderSupported(){
    var types = ["video/webm",
        "audio/webm",
        "video/webm\;codecs=vp8",
        "video/webm\;codecs=daala",
        "video/webm\;codecs=h264",
        "audio/webm\;codecs=opus",
        "video/mpeg"];

    for (var i in types) {
        console.log( "Is " + types[i] + " supported? " + (window.MediaRecorder.isTypeSupported(types[i]) ? "Maybe!" : "Nope :("));
    }
}