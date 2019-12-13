/*
* date: 2019-12-13
* desc:
*/
function preloadImg(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve();
        };
        img.src = src;
    });
}



