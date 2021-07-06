function utilsIsSupport(){
    var types = ["video/webm",
        "audio/webm",
        "video/webm",
        "video/webm;codecs=vp9",
        "video/webm;codecs=vp8",
        "video/webm;codecs=daala",
        "video/webm;codecs=h264",
        "audio/webm;codecs=opus",
        'video/mp4\;codecs="avc1.424028, mp4a.40.2"',
        'video/mp4',
        'video/webm;codecs=vp9,opus',
        'video/webm;codecs=vp8,opus',
        'video/webm;codecs=h264,opus',
        'video/mp4;codecs=h264,aac',
        "video/mpeg"];

    for (var i in types) {
        console.log( "Is " + types[i] + " supported? " + (MediaRecorder.isTypeSupported(types[i]) ? "Maybe!" : "Nope :("));
    }
}