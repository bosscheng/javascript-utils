/*
* date: 2020-02-04
* desc: 是都是手机号
*/
function isPhoneNum(str) {
    return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(str)
}
