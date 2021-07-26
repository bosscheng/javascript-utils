function utilsDownloadFile(file,fileName){
    if (file instanceof Blob || file instanceof File) {
        file = new Blob([file]);
    }
    const aLink = document.createElement("a");
    aLink.download = fileName;
    aLink.href = file;
    aLink.click();
}