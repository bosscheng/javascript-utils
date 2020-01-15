/*
* date: 2020-01-15
* desc: 会添加额外参数。
*/
function merge(...arg) {
    let base = arg[0];
    if (!base) return;
    [].forEach.call(arg, function(item, index) {
        // 从二个参数开始。
        if (index > 0) {
            for (let attrname in item) {
                // hasOwnProperty
                if (Object.prototype.hasOwnProperty.call(item, attrname)) {
                    base[attrname] = item[attrname];
                }
            }
        }
    });
    return base;
}
