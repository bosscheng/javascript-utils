/**
 * Date:2021/1/14
 * Desc: 16位的uuid
 */
function uuid() {
    return 'xxxxxxxxxxxx4xxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8)
        return v.toString(16)
    })
}


const result = uuid();
console.log(result,result.length)