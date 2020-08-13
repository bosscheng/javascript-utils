/**
 * Date: 8/13/20
 */
//
function merge2(dataArray) {
    let result = [];

    dataArray.forEach((item) => {
        result = result.concat(item);
    });

    return result;
}
