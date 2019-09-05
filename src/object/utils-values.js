/*
* date: 2019-09-03
* desc:
*/
const values = Object.values || function (obj) {
    let result = [];
    for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
            result.push(obj[k]);
        }
    }

    return result;
};

