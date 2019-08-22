/*
* date: 2019-08-21
* desc:
*/
/**
 * @doc  function
 * @name util,isUndefinedByJquery alis isUndefined
 * @function
 *
 * @desction
 * Determins if a reference is undefined
 *
 * @param {*} value Reference to check
 *
 * @return {boolean} True if 'value' is undefined
 *
 * */
var isUndefined = function (value) {
    return value === void 0;
};

var isUndefined2 = function (value) {
    return value === undefined;
};

/**
 * @doc  function
 * @name util,isUndefinedByNg
 * @function
 *
 * @desction
 * Determins if a reference is undefined
 *
 * @param {*} value Reference to check
 *
 * @return {boolean} True if 'value' is undefined
 *
 * */
var isUndefined3 = function (value) {
    return typeof value === "undefined";
};
