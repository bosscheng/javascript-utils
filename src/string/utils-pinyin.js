/*
* date: 2020-03-18
* desc:
*/

function getPinyinCharCode(str) {
    var lower = ('' + str).toLowerCase();
    return lower.charCodeAt();
}

let pinyinUtil = {
    isPinyinAG: function (str) {
        var code = getPinyinCharCode(str);
        return code >= 97 && code <= 103
    },

    isPinyinHN: function (str) {
        var code = getPinyinCharCode(str);
        return code >= 104 && code <= 110
    },

    isPinyinOT: function (str) {
        var code = getPinyinCharCode(str);
        return code >= 111 && code <= 116
    },

    //
    isPinyinUZ: function (str) {
        var code = getPinyinCharCode(str);
        return code >= 117 && code <= 122
    },

    isPinyinOther: function (str) {
        var code = getPinyinCharCode(str);
        return code < 97 || code > 122;
    }
};
