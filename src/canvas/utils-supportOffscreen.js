function utilsSupportOffscreen($canvas) {
    return typeof $canvas.transferControlToOffscreen === 'function';
}