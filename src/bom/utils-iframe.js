/**
 * reject iframe
 *
 * @desc
 *  同时满足：
 *
 *  1. parent == self
 *  2. parent.document.domain == document.domain || (document.referrer && 合法的 referrer)
 *
 *
 */
function rejectIframe() {
    var legalUrl = /^http(s)?:\/\/[.\w-]+\.xxx\.com\//i;
    try {
        if (parent != self && (parent.document.domain != document.domain || document.referrer && !legalUrl.test(document.referrer))) throw new Error("can't be iframed")
    } catch (e) {
        window.open(location.href, "_top")
    }
}


/*

@desc
   创建一个iframe对象。
@param {String} frameName
@param {String} src
*/
var createIframe = function (frameName, src) {
    if (src === null) {
        src = "javascript:;";
    }

    var _removeIframe = function (frameName) {
        var iframe = document.getElementById(frameName);
        if (iframe) {
            document && document.body && document.body.removeChild(iframe);
        }
    };

    _removeIframe(frameName);


    var frame = document.createElement("iframe");
    frame.height = 0;
    frame.width = 0;
    frame.style ? frame.style.display = "none" : '';
    frame.name = frameName;
    frame.id = frameName;
    frame.src = src;
    document.body && document.body.appendChild(frame);
    window.iframe[frameName].name = frameName;
    return frame;
}

