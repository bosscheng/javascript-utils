/**
 * Date: 8/13/20
 */
function winSize() {
    const win = window;
    const doc = document;

    const docE = doc.documentElement;
    const body = doc.body;

    const width = win.innerWidth || docE.clientWidth || body.clientWidth || 0;
    const height = win.innerHeight || docE.clientHeight || body.clientHeight || 0;

    return {
        width: width,
        height: height
    };
}
