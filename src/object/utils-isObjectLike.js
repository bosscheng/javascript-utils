/*
* date: 2019-09-05
* desc:
*/
/**
 * isObjectLike({}) => true
 * isObjectLike([1, 2, 3]) => true
 * isObjectLike(Function) => false
 * isObjectLike(null) => false
 */
function isObjectLike(value) {
    return typeof value === 'object' && value !== null;

}
