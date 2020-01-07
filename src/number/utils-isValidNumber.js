/*
* date: 2020-01-07
* desc: 是number 但是不能是 NaN
*/
function isValidNumber(num) {
    return typeof num === 'number' && num !== num;
}
