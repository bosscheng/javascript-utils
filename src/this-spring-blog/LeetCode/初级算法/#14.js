/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return '';
    if (strs.length == 1) return strs[0];
    const flag = strs[0];
    let realRes = '';
    let res = '';
    for (let i = 0, len = flag.length; i < len; i += 1) {
        const item = flag[i];
        let real = true;
        for (let j = 1; j < strs.length; j += 1) {
            if (item != strs[j][i] || j == strs.length - 1) {
                if (res.length >= realRes) {
                    realRes = res;
                }
                res = '';
                real = false;
                break;
            }
        }
        if (real) {
            res += item;
        }
    }
    return realRes;
};

const test = ["flower","flower","flower"];
console.log(longestCommonPrefix(test));