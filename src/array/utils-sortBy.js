/*
* date: 2019-08-31
* desc:
*/
function sortBy(arr, key) {
    let comparer;
    if (typeof key === 'function') {
        comparer = (a, b) => key(a) - key(b);
    } else {
        let keys = [];
        if (typeof key === "string") {
            keys.push(key);
        } else if (Array.isArray(key)) {
            keys = key;
        }

        comparer = (a, b) => {
            keys.forEach((i) => {
                if (a[i] > b[i]) {
                    return 1;
                }

                if (a[i] < b[i]) {
                    return -1;
                }
            });
            return 0
        }
    }

    arr.sort(comparer);
    return arr;
}
