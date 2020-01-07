/*
* date: 2020-01-07
* desc: 个位补齐0x
*/
function patchZero(num) {

    if (typeof num !== 'number' || num !== num) {
        return num;
    }


    // 如果是个位数，则直接给个位数补0；
    return (num < 10 ? '0' : '') + num;
}
