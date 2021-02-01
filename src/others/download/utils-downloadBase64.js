
/**
 * Date:2021/2/1
 * 文件类型枚举 文件后缀名 -> base64 data:前缀
 * @readonly
 * @enum {string}
 */

/**
 * base64数据转文件下载
 * @param type 文件类型
 * @param {string} [saveName] 保存文件名
 * @param {string} data  base64 数据
 */
function downloadByBase64(type, saveName, data) {
    const link = document.createElement('a')
    link.download = saveName;
    link.href = type === null ? data : (TYPE_MAP[type] || '') + data
    link.click()
}

const TYPE_MAP = {
    /**
     * data:image/jpg;base64,
     */
    jpg: 'data:image/jpg;base64,',

    /**
     * data:image/png;base64,
     */
    png: 'data:image/png;base64,',
    /**
     * data:text/csv;charset=utf-8,
     */
    csv: 'data:text/csv;charset=utf-8,'
}
