/**
 *
 * */
var loadJs = function (script_file_url, script_id, callback) {
    var head = document.head || document.getElementByTagName("head")[0] || document.documentElement;
    var script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.setAttribute("src", script_file_url);
    script.setAttribute("id", script_id);
    script.setAttribute("charset", "utf-8");

    var scriptId = document.getElementById(script_id);
    // 如果已经添加了，删除掉。
    if (scriptId) {
        head.removeChild(scriptId);
    }
    head.appendChild(script);

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
