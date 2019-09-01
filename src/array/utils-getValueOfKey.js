/*
* date: 2019-09-01
* desc:
*/

function _isNil(value) {
    return value === null || value === undefined;
}

function getValueOfKey(data, name) {
    const result = [];
    const tempMap = {};
    data.forEach((obj) => {
        let val = obj[name];

        if (!_isNil(val)) {
            if (!Array.isArray(val)) {
                val = [val];
            }
        }
        //
        val.forEach((v) => {
            if (!tempMap[v]) {
                result.push(v);
                tempMap[v] = true;
            }
        })
    });

    return result;
}
