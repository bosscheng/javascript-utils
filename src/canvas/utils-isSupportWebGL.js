function utilsIsSupportWebGL(){
    let result = true;

    try {
        if (!window.WebGLRenderingContext) {
            return false;
        }
        const canvas = document.createElement('canvas');
        let context = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

        result = !!context;
        context = null;
    } catch (err) {
        result = false;
    }

    return  result;
}