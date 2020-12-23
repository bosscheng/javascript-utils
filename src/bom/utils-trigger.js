/**
 * Date:2020/12/23
 * Desc:
 */
function trigger(target, type) {
    const inputEvent = document.createElement('HTMLEvents');
    inputEvent.initEvent(type, true, true);
    target.dispatchEvent(inputEvent);

}
