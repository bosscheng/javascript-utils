function getBase64FileType(base64) {
    const arr = base64.split(",");
    const type = arr[0].replace("data:", "").replace(";base64", "");
    return type;
}