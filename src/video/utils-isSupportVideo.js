/**
 * Date:2021/1/21
 * Desc:
 */
function isSupportVideo() {
    if (!!document.createElement('video').canPlayType) {
        var vidTest = document.createElement('video');
        var oggTest;
        try {
            oggTest = vidTest.canPlayType('video/ogg; codecs="theora, vorbis"');
        } catch (error) {
            oggTest = false;
        }
        if (!oggTest) {
            var h264Test;
            try {
                h264Test = vidTest.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
            } catch (error) {
                h264Test = false;
            }
            if (!h264Test) {
                return false;
            } else {
                if (h264Test === "probably") {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            if (oggTest === "probably") {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
}
