/**
 * Date:2020/12/23
 * Desc:
 */

function toQueryString(obj) {
    return Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`).join('&');
}
