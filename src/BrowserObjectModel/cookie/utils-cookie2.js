/**
 * cookie操作
 */


/**
 * 设置cookie
 * @param {string} sKey 名称
 * @param {string} sValue 值
 * @param {string|number|Date} [vEnd] 过期时间， 数字类型单位是秒
 * @param {string} [sPath] 它指定与cookie关联在一起的网页。在默认的情况下cookie会与创建它的网页，该网页处于同一目录下的网页以及与这个网页所在目录下的子目录下的网页关联。
 * @param {string} [sDomain] omain属性可以使多个web服务器共享cookie。domain属性的默认值是创建cookie的网页所在服务器的主机名。不能将一个cookie的域设置成服务器所在的域之外的域
 * @param {boolean} [bSecure] 它是一个布尔值，指定在网络上如何传输cookie，默认是不安全的，通过一个普通的http连接传输
 * @returns {boolean}
 */
function set(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    // 过滤掉关键词key
    if (!sKey || /^(?:expires|max-age|path|domain|secure)$/i.test(sKey)) return false;
    let sExpires = '';
    if (vEnd) {
        switch (vEnd.constructor) {
            case Number:
                sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd;
                break;
            case String:
                sExpires = '; expires=' + vEnd;
                break;
            case Date:
                sExpires = '; expires=' + vEnd.toUTCString();
                break;
        }
    }
    document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '');
    return true;
}

/**
 * 获取cookie
 * @param {string} sKey 名称
 * @returns {string | null}
 */
function get(sKey) {
    return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null;
}

/**
 * 判断是否存在该名称的cookie
 * @param {string} sKey 名称
 * @returns {boolean}
 */
function has(sKey) {
    return new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=').test(document.cookie);
}

/**
 * 删除cookie
 * @param {string} sKey 名称
 * @param {string} [sPath] 它指定与cookie关联在一起的网页。在默认的情况下cookie会与创建它的网页，该网页处于同一目录下的网页以及与这个网页所在目录下的子目录下的网页关联
 * @param {string} [sDomain] domain属性可以使多个web服务器共享cookie
 * @returns {boolean}
 */
export function remove(sKey, sPath, sDomain) {
    if (!sKey || !has(sKey)) return false;
    document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '');
    return true;
}

/**
 * 获取全部cookie名称
 * @returns {string[]}
 */
function keys() {
    const aKeys = document.cookie.replace(/((?:^|\s*;)[^=]+)(?=;|$)|^\s*|\s*(?:=[^;]*)?(?:$)/g, '').split(/\s*(?:=[^;]*)?;\s*/);
    for (let nIdx = 0; nIdx < aKeys.length; nIdx++) {
        aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
    }
    return aKeys;
}
