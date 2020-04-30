/**
 * Date:2020/4/30
 * Desc:
 */

function pageReload() {
    let href = window.location.href;
    if (href.indexOf('?') !== -1) {
        href = href + '&_=' + (new Date()).getTime();
    }
    else {
        href = href + '?_=' + (new Date()).getTime();
    }
    window.location.href = href;
}
