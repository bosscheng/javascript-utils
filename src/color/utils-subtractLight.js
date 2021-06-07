function subtractLight(color,amount){
    const cc = parseInt(color, 16) - amount;
    const c = cc < 0 ? 0 : cc;
    return c.toString(16).length > 1 ? c.toString(16) : `0${c.toString(16)}`;
}