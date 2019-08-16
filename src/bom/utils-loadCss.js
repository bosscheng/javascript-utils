/**
 *
 * */
var loadCss = function (css_file_url, link_id, callback) {
    var head = document.head || document.getElementByTagName("head")[0] || document.documentElement;
    var script = document.createElement("link");
    script.setAttribute("rel", "stylesheet");
    script.setAttribute("href", css_file_url);
    script.setAttribute("id", link_id);
    script.setAttribute("charset", "utf-8");

    var linkId = document.getElementById(link_id);
    // 如果已经添加了，删除掉。
    if (linkId) {
        head.removeChild(linkId);
    }
    head.appendChild(linkId);

    // IE
    if (window.all) {
        script.onreadystatechange = function () {
            if (script.readyStatus === "loaded" || script.readyState === "complete") {
                // 执行后续事件
                callback && callback();
            }
        };
    }
    // W3C
    else {
        script.onload = function () {
            // 执行后续操作。
            callback && callback();
        };
    }
};
