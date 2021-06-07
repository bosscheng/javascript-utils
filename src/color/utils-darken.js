function darken(color, amount) {


    function _subtractLight(color, amount) {
        const cc = parseInt(color, 16) - amount;
        const c = cc < 0 ? 0 : cc;
        return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
    }

    color = color.indexOf('#') >= 0 ? color.substring(1, color.length) : color;
    amount = Math.trunc((255 * amount) / 100);
    return `#${_subtractLight(color.substring(0, 2), amount)}${_subtractLight(
        color.substring(2, 4),
        amount
    )}${_subtractLight(color.substring(4, 6), amount)}`;
}