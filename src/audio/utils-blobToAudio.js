function utilsBlobToAudio(blob) {
    const url = URL.createObjectURL(blob);

    return new Audio(url)
}