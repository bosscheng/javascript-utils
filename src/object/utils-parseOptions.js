/**
 * Date:2020/12/24
 * Desc:
 */
function parseOptions(message) {
    if (message !== null && typeof message === 'object') {
        return message
    }

    return {message}
}
