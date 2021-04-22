function string2Blob(str) {
    return URL.createObjectURL(
        new Blob([str], {type: 'application/octet-stream'})
    )
}