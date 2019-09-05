/*
* date: 2019-09-05
* desc:
*/

const deepClone = function(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    let rst;
    if (Array.isArray(obj)) {
        rst = [];
        for (let i = 0, l = obj.length; i < l; i++) {
            if (typeof obj[i] === 'object' && obj[i] != null) {
                rst[i] = deepClone(obj[i]);
            } else {
                rst[i] = obj[i];
            }
        }
    } else {
        rst = {};
        for (const k in obj) {
            if (typeof obj[k] === 'object' && obj[k] != null) {
                rst[k] = deepClone(obj[k]);
            } else {
                rst[k] = obj[k];
            }
        }
    }

    return rst;
};
