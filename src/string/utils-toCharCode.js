function stringToCharCode(str) {
    return str.split('').map(function (char) {
        return '0x'+char.charCodeAt(0).toString(16);
    });
}
let result = stringToCharCode('^(localhost|127.0.0.1)$');
console.log(result);