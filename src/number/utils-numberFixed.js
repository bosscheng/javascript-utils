/**
 * Date:2020/8/4
 * Desc:
 */
function numberFixed(num, numFixed) {
    let result = num;
    if (typeof numFixed === 'number') {
        result = ('' + num).indexOf('.') !== -1 ? num.toFixed(numFixed) : num;
    }

    return result;
}
