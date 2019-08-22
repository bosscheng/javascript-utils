/*
* date: 2019-08-21
* desc:
*/
//
var isArrayBufferView = function (value) {
    var result;
    //
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(value);
    } else {
        result = (value) && (value.buffer) && (value.buffer instanceof ArrayBuffer);
    }

    return result;
};
