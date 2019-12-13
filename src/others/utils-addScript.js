/*
* date: 2019-12-13
* desc:
*/
function addScript({src, onLoad, onError}) {
    if (!src) {
        console.error('引入的 JS 文件未指定路径');
        return;
    }

    const isExist = document.querySelector(`script[src='${src}']`) !== null;
    if (isExist) {
        console.error('不能重复添加 JS 文件：' + src);
        return;
    }

    let script = document.createElement('script');
    script.src = src;
    script.onload = onLoad;
    script.onerror = onError;
    document.body.appendChild(script);

    return {
        remove() {
            document.body.removeChild(script);
        }
    };
}
