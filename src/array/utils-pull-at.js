/*
* date: 2019-08-31
* desc:
*/
function pullAt(arr, indexes) {
    if (!Array.isArray(arr)) {
        return [];
    }

    let length = arr ? arr.length : 0;
    const last = length - 1;
    while (length--) {
        let previous;
        const index = indexes[length];
        if (length === last || index !== previous) {
            previous = index;
            arr.splice(index, 1);
        }
    }

    return arr;
}
