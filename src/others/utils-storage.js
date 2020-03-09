/*
* date: 2020-03-09
* desc: storage 支持过期时间，支持 localstorage，cookie
*/

const exp = 60 * 60 * 24 * 1000 // 过期时间一天
const prefix = 'prefix_' // 前缀，主要用于避免冲突

/**
 * 读取值
 * @param {string} keyName    - 字段名
 * @param {any}    defaultVal - 默认值，在某些情况下非常有用，比如返回对象时可免除空值判断
 * @returns {any}
 */
export function getStoreValue(keyName, defaultVal = '') {
    const data = localStorage.getItem(prefix + keyName)

    if (data == null || data === '') {
        return defaultVal
    }

    try {
        const jsonData = JSON.parse(data)
        if (Date.now() - jsonData.time >= exp) {
            removeStoreValue(keyName)
            return defaultVal
        }
        return jsonData.value
    } catch (error) {
        return defaultVal
    }
}


/**
 * 写入值
 * @param {string} keyName - 字段名
 * @param {any}    value   - 待存储的值
 */
export function setStoreValue(keyName, value) {
    localStorage.setItem(prefix + keyName, JSON.stringify({ value, time: Date.now() }))
}

/**
 * 删除值
 * @param {string} keyName - 字段名
 */
export function removeStoreValue(keyName) {
    localStorage.removeItem(prefix + keyName)
}

