/**
 * Date:2020/12/28
 * Desc:
 */
/**
 * @param {number[]} arry
 * @return {void}
 */
function shellSort(arry) {
    const len = arry.length
    const n = len / 3
    let step = 1
    while (step < n) {
        step = step * 3 + 1
    }

    while (step >= 1) {
        for (let i = step; i < len; i++) {
            for (let j = i; j >= step; j -= step) {
                const tempIndex = j - step
                if (arry[j] < arry[tempIndex]) {
                    const tempVal = arry[j]
                    arry[j] = arry[tempIndex]
                    arry[tempIndex] = tempVal
                } else {
                    break
                }
            }
        }

        step = Math.floor(step / 3)
    }
}
