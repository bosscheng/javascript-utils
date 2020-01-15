/*
* date: 2020-01-15
* desc: 不会添加额外参数。
*/
function extend(...arg) {
    let base = arg[0];
    if (!base) return;
    [].forEach.call(arg, function(item, index) {
        // 第二个参数开始。
        if (index > 0) {
            for (let attrname in item) {
                if (Object.prototype.hasOwnProperty.call(item, attrname)) {
                    //
                    if (base[attrname] !== undefined) {
                        base[attrname] = item[attrname];
                    }
                }
            }
        }
    });
    return base;
}
