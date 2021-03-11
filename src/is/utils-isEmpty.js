/**
 * Date:2020/9/14
 * Desc:
 */

function isEmpty(value) {
    return value === null || value === undefined
}

function isEmpty2(value) {
    return (typeof value === "string" && value.trim() === '') || isEmpty(value);
}
