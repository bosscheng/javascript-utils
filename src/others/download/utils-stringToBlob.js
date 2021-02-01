/**
 * Date:2021/2/1
 * 将字符串转换成Blob数据
 * @param str 字符串
 * @example
 *  let json = {name: '张三'};
 *  downloadByData(null, 'name.json', stringToBlob(JSON.stringify(json)))
 */
export function stringToBlob(str) {
    return URL.createObjectURL(
        new Blob([str], {type: 'application/octet-stream'})
    );
}
