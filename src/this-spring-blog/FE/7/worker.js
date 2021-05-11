/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-04-08 18:55:55
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-04-08 21:00:40
 */
function text() {
    return 'this is worker';
}

// setInterval(() => {
//     postMessage('child message');
// }, 2 * 1000);
onmessage = function(e) {
    console.log(e.data);
    postMessage('child message');
}


export { text }