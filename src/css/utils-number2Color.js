let number2Color = function () {
    const numberColorCache = {};
    return function (num) {
        let color = numberColorCache[num];
        if (!color) {
            let str = num.toString(16);
            for (let i = str.length; i < 6; i++) {
                str = '0' + str;
            }
            color = "#" + str;
            numberColorCache[num] = color;
        }

        return color;
    };
}();
