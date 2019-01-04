/**
 * 主要收集 浏览器的DOM 的工具方法
 * Author: bosscheng
 * Data: 14-12-4
 */

var org = org || {};
org.util = org.util || {};

;(function (util) {
    /*
     内部方法 遍历整个DOM节点
    */
    var walkTheDom = function walk(node, func) {
        func(node);
        node = node.firstChild;

        while (node) {
            walk(node, func);
            node = node.nextSibling;
        }
    }

    /*
    get elements by attribute

    @param attr 属性 类似于  class
    @param value 值 test-node

    查询的是class="test-node"的节点。
    */
    util.getElementsByAttribute = function (att, value) {
        var results = [];

        valkTheDom(document.body, function (node) {
            var actual = node.nodeType === 1 && node.getAttribute(attr);
            if (typeof actual === "string" && (actual === value || typeof value !== "string")) {
                results.push(node);
            }
        });
        return results;
    }
    /*

    @desc
       创建一个iframe对象。
    @param {String} frameName
    @param {String} src
    */
    util.createIframe = function (frameName, src) {
        if (src === null) {
            src = "javascript:;";
        }
        removeIframe(frameName);

        var frame = document.createElement("iframe");
        franme.height = 0;
        frame.width = 0;
        frame.style ? frame.style.display = "none" : '';
        frame.name = frameName;
        frame.id = frameName;
        frame.src = src;
        document.body && document.body.appendChild(frame);
        window.frames[frameName].name = frameName;
        return frame;
    }

    /**
     create iframe
     */
    util.createIframeNew = function (url) {
        // 保证只创建一次
        if (!arguments.callee.iframe) {
            var iframe = document.createElement("iframe");
            iframe.style.display = "none";
            document.body.appendChild(iframe);
            arguments.callee.iframe = iframe;
        }
        arguments.callee.iframe.src = url;
    }

    /*
    @param {String} frameName
    */
    var removeIframe = util.removeIframe = function (frameName) {
        var iframe = document.getElementById(frameName);
        if (iframe) {
            document && document.body && document.body.removeChild(iframe);
        }
    }
    /*
    @desc
       移除一个node节点
    @param {string}

    */
    var removeNode = util.removeNode = function (nodeId) {
        try {
            if (typeof nodeId === "string") {
                var node = document.getElementById(nodeId);
                if (node && node.parentNode) {
                    node.parentNode.removeChile(nodeId);
                }
            }
        } catch (e) {

        }
    }

    /**
     * 鼠标滚轮事件
     * */
    util.manualMouseWheel = function (el) {
        el.on('mousewheel DOMMouseScroll', function (e) {
            var oe = e.originalEvent;
            var delta = oe.wheelDelta / 120 || -oe.detail / 3;
            $(this).scrollTop($(this).scrollTop() + -60 * delta);
            return false;
        });
    };

    /**
     * @desc
     *
     * @param node
     *
     * element(元素) 1
     * attr（属性） 2
     * text（文本） 3
     * comments（注释） 8
     * document （文档）9
     */
    util.getNodeType = function (node) {
        var result = null;
        if (node.nodeType) {
            switch (node.nodeType) {
                case 1:
                    result = 'element';
                    break;
                case 2:
                    result = 'attr';
                    break;
                case 3:
                    result = 'text'; // 文本节点
                    break;
                case 8:
                    result = 'comments';
                    break;
                case 9:
                    result = 'document';
                    break;
                default:
                    break;
            }
        }

        return result;
    }


    /**
     *
     * @param element DOM 元素。
     * @param classNames String 用字符串分割开来。
     */
    util.addClass = function (element, classNames) {

        if (!element || !classNames) {
            return;
        }

        var curClassNames = element.className;
        // 用空格分来
        var classes = (classNames || '').split(' ');

        for (var i = 0, len = classes.length; i < len; i++) {
            var classItem = classes[i];
            if (!classItem) {
                continue;
            }

            if (element.classList) {
                element.classList.add(classItem);
            } else if (!util.hasClass(element, classItem)) {
                curClassNames += ' ' + classItem;
            }
        }

        if (!element.classList) {
            element.className = curClassNames;
        }
    };

    util.removeClass = function (element, classNames) {
        if (!element || !classNames) {
            return;
        }

        var curClassNames = ' ' + element.className + ' ';
        // 用空格分来
        var classes = (classNames || '').split(' ');

        for (var i = 0, len = classes.length; i < len; i++) {
            var classItem = classes[i];
            if (!classItem) {
                continue;
            }

            if (element.classList) {
                element.classList.remove(classItem);
            } else if (!util.hasClass(element, classItem)) {
                curClassNames = curClassNames.replace(' ' + classItem + ' ', ' ');
            }
        }

        if (!element.classList) {
            element.className = trim(curClassNames);
        }
    };


    /**
     *
     * @param element Element 元素
     * @param className
     * @returns {boolean}
     */
    util.hasClass = function (element, className) {
        if (!element || !className) {
            return false;
        }

        //
        if (className.indexOf(' ') !== -1) {
            throw new Error('classNames should not contain space');
        }


        if (element.classList) {
            return element.classList.contains(className);
        } else {
            return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
        }
    }


})(org.util);


// 临时占坑

/*
(function () {
    var _init = function () {
        var debug = (location.hostname.indexOf('.example.com') === -1);
        if (TB.bom.getCookie("_tb_defaultbackpop_") === 1 && !debug) {
            return;
        }

        var nowDate = new Date();
        var nowTime = nowDate.getHours() * 3600 + nowDate.getMinutes() * 60 + nowDate.getSeconds();
        var DAY = 24 * 3600;
        var leaveTime = DAY - nowTime;
        TB.bom.setCookie("__tb_defaultbackpop_", 1, leaveTime / DAY, document.domain, '/');

        var popuped = false;

        var popAd = function () {
            if (popuped) return;
            popuped = true;
            var purl = "www.example.com";
            var h = 480;
            var w = 760;
            var adPopup = window.open('about:blank', "_blank", '')
            ;
            addPopup.blur();
            addPopup.opener.focus();
            adPopup.location = purl;
            $E.removeListener(document.body, 'click', argument.callee);

        }

        try {
            popAd();
        } catch (e) {
            popuped = false;
            $E.on(document.body, 'click', popAd);
        }

    }

    $E.on(window, 'load', _init);
})();
*/





