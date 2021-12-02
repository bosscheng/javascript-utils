function utilsSaveBlobToFile2(fileName, blob) {

    let url = window.URL.createObjectURL(blob);
    let aLink = window.document.createElement('a');
    aLink.download = fileName;
    aLink.href = url;
    //创建内置事件并触发
    let evt = window.document.createEvent('MouseEvents');
    evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    aLink.dispatchEvent(evt);
}