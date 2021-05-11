/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-04-20 15:23:21
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-04-20 21:46:47
 */
var hc = document.getElementById('canvas');
var offscreen = hc.transferControlToOffscreen();
var worker = new Worker('./offscreen.worker.js');
const width = 472;
const height = 472;
let yData = null;
let uData = null;
let vData = null;
var count = 0;

worker.postMessage({
    type: '1',
    canvas: offscreen
}, [offscreen]);
fetch('../otest.yuv').then(res => res.arrayBuffer()).then((res) => {
    const yuvData = new Uint8Array(res);
    yData = yuvData.subarray(0, width * height);
    uData = yuvData.subarray(width * height, width * height * 1.25);
    vData = yuvData.subarray(width * height * 1.25, width * height * 1.5);
    worker.postMessage({
        type: '2',
        opt: {
            width,
            height,
            yData,
            uData,
            vData,
        }
    });
});
function start() {
    window.timeId = setInterval(() => {
        count += 1;
        if (count % 2 == 0) {
            worker.postMessage({
                type: '2',
                    opt: {
                        width,
                        height,
                        yData,
                        uData,
                        vData,
                    }
            });
        } else {
            worker.postMessage({
                type: '2',
                    opt: {
                        width,
                        height,
                        yData,
                        yData: new Uint8Array(width * height),
                        uData,
                        vData,
                    }
            });
        }
    
    }, 10);
}

function end() {
    clearInterval(window.timeId);
}
