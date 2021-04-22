// 将base64转换成file格式文件
function base64ToFile(base64, fileName) {
    const arr = base64.split(',');
    const m = arr[0].match(/:(.*?);/);
    if (m === null) {
        return false
    } else {
        const mime = arr[0].match(/:(.*?);/)[1]
        const bytes = atob(arr[1]) // 解码base64
        let n = bytes.length
        const ia = new Uint8Array(n)
        while (n--) {
            ia[n] = bytes.charCodeAt(n)
        }
        return new File([ia], fileName, {type: mime})
    }
}