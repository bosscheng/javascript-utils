/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2021-04-06 16:46:48
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2021-04-06 17:02:27
*/
setTimeout(() => {
    const xhr = new XMLHttpRequest();
xhr.responseType = 'arraybuffer';
xhr.timeout = 100;
xhr.ontimeout = function() {
    console.log('timeout');
}
xhr.onerror = function(e) {
    console.log(JSON.stringify(e, ["message", "arguments", "type", "name"]));
    console.log('error: e', JSON.stringify(e), e);
}
xhr.onload = function() {
    // throw new Error('xxx');
    // console.log(b);
    console.log(xhr.response);
}
xhr.open('get', 'https://klcs01.kaochong.com/courseware/8169ced3b9532ff06f5fd7415fd0fa0e/19.pdf');
// xhr.open('get', 'https://klcs01.kaochong.com/courseware/19.pdf');

xhr.send();
}, 5 * 1000);
// setTimeout(() => {
//     xhr.abort();
// }, 500);

