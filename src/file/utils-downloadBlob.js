/**
 * @desc 下载 二进制文件
 * @param blob
 * @param name
 */
function downloadBlob(blob, name) {
    const render = new FileReader();

    render.onload = ev => {
        const link = document.createElement('a');
        link.download = name;
        link.href = ev.target.result;
        link.click();
    }

    render.onerror = ev => {
        console.error(ev);
    }


    render.readAsDataURL(blob);
}
