function colorIsDark(color){
    function _isHexColor(hex){
        const reg = /^#([0-9a-fA-F]{3}|[0-9a-fA-f]{6})$/;
        return reg.test(hex);
    }

    function _hexToRGB(hex){
        let sHex = hex.toLowerCase();
        if (_isHexColor(hex)) {
            if (sHex.length === 4) {
                let sColorNew = '#';
                for (let i = 1; i < 4; i += 1) {
                    sColorNew += sHex.slice(i, i + 1).concat(sHex.slice(i, i + 1));
                }
                sHex = sColorNew;
            }
            const sColorChange = [];
            for (let i = 1; i < 7; i += 2) {
                sColorChange.push(parseInt('0x' + sHex.slice(i, i + 2)));
            }
            return 'RGB(' + sColorChange.join(',') + ')';
        }
        return sHex;
    }

    if (!_isHexColor(color)) return;
    const [r, g, b] = _hexToRGB(color)
        .replace(/(?:\(|\)|rgb|RGB)*/g, '')
        .split(',')
        .map((item) => Number(item));
    return r * 0.299 + g * 0.578 + b * 0.114 < 192;
}