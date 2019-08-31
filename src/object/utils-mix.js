/*
* date: 2019-08-01
* desc: mix 合并
*/
function _mix(dist, obj) {
    for (var key in obj) {
        // hasownproperty
        // key is not constructor
        // value is not undefined
        if (obj.hasOwnProperty(key) && key !== 'constructor' && obj[key] !== undefined) {
            dist[key] = obj[key];
        }
    }
}

var mix = function (dist, src1, src2, src3) {
    if (src1) _mix(dist, src1);
    if (src2) _mix(dist, src2);
    if (src3) _mix(dist, src3);
    return dist;
};



/*
    mix 最小化
*/
var mix2 = function (r, s, wl) {
    // 复制所有的属性
    for (var p in s) {
        if (s.hasOwnProperty(p)) {
            if (wl && indexOf(wl, p) === -1) {
                continue;
            }
            // 在 iphone 1 代等设备的Safari中，prototype也会被枚举出来，这里要过滤掉。
            if (p !== "prototype") {
                r[p] = s[p];
            }
        }
    }
};
