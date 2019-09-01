/*
* date: 2019-08-31
* desc:
*/
function uniq(arr) {
    const result = [];
    arr.forEach((item) => {
        if (arr.indexOf(item) === -1) {
            result.push(item);
        }
    });
    return result;
}
