/*
* date: 2020-02-04
* desc: 随机生成颜色
*/
function randomColor() {
    return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}

function colorRandom() {
    return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
}
