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
