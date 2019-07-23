/*
* date: 2019-07-23
* desc:
*   params: [1,2,3,4,5,6], 3
    return: [[1,2,3], [4.5.6]]
*/

function divideIntoRows(array, limitOfColumn) {
    if (!array || !array.length) return []
    let tempRows = [];
    for (let i = 0; i < array.length / limitOfColumn; i++) {
        let row = [];
        for (let j = 0; j < limitOfColumn; j++) {
            if (array[i * limitOfColumn + j]) row.push(array[i * limitOfColumn + j])
        }
        if (row.length) tempRows.push(row)
    }
    return tempRows;
}
