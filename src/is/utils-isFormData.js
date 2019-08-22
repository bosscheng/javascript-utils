/*
* date: 2019-08-21
* desc:
*/
var isFormData = function (value) {
    return (typeof FormData !== 'undefined') && (value instanceof FormData);
};
