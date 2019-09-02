const isInteger = Number.isInteger ? Number.isInteger : function (num) {
    return typeof num === "number" && num % 1 === 0;
};
