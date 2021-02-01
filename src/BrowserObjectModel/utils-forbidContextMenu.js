var preventDefault = function (e) {
    if (!e) {
        return;
    }

    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
};

var forbidContextMenu = function (e) {
    window.document.oncontextmenu = preventDefault(e);
};
