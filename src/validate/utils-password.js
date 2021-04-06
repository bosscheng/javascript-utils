// 支持全键盘符号
function password(str) {
    return /^[\x21-\x7e]+$/.test(str);
}