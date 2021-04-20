function downloadImageByFile(file, fileName) {
    const aLink = document.createElement("a");
    aLink.download = fileName;
    aLink.href = URL.createObjectURL(file);
    aLink.click();
    URL.revokeObjectURL(file);
}