/**
 *
 * @param str
 * @returns {boolean}
 */
function url2(str){
    return /^(http|https):\/\/*/.test(str);
}