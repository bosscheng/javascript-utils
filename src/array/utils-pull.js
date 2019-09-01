/*
* date: 2019-08-31
* desc:
*/

function pull(arr) {
    const values = Array.prototype.slice.call(arguments, 1);
    values.forEach((value) => {
        let fromIndex = -1;
        while ((fromIndex = arr.indexOf(value)) > -1) {
            arr.splice(fromIndex, 1);
        }
    });
    return arr;
}
