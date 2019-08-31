/*
* date: 2019-08-29
* desc:
*/
function formatNumber(num) {
    num += '';
    const x = num.split('.');
    let x1 = x[0];
    const x2 = x.length > 1 ? '.' + x[1] : '';
    const rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}


/**
 * @desc
 *      格式化数字，格式化金额
 *
 * @param number: 要格式化的数字
 * @param decimals: 保留几位小数
 * @param decPoint: 小数符号
 * @param thousandsSep: 千分位符号

 *
 * */
var numberFormat = function (number, decimals, decPoint, thousandsSep) {
    // 将非 0-9/-+eE.的部分用空白替换
    // number + '' 转义成 string 类型
    number = (number + '').replace(/[^0-9+-Ee.]/g, '');
    // +string 转义成 number 类型
    var n = !isFinite(+number) ? 0 : +number;
    var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    var sep = (typeof thousandsSep === "undefined") ? ',' : thousandsSep;
    var dec = (typeof decPoint === "undefined") ? '.' : decPoint;
    var s = '';
    // 将
    var toFixedFix = function (n, prec) {
        var k = Math.pow(10, prec);
        return '' + Math.ceil(n * k) / k;
    };

    // 将数字变成数组 [0] 表示整数，[1]表示分数
    s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
    //
    var re = /(-?\d+)(\d{3})/;
    // 将整数按照 三位的用符号分割
    while (re.test(s[0])) {
        s[0] = s[0].replace(re, "$1" + sep + "$2");
    }

    // 将小数四舍五入
    if ((s[1] || '').length < prec) {
        s[1] = s[1] || '';
        s[1] += [prec - s[1].length + 1].join('0');
    }
    // 将数组转义成字符串
    return s.join(dec);
};