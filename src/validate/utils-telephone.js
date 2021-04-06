//电话号码，包含数字和“-”
function telephone(str) {
    return /^([0-9]|[-])+$/.test(str);
}