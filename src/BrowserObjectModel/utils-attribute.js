/*
 @desc
 get attribute
 */
var getAttribute = function (target, attribute) {
    return target.getAttribute(attribute) || target[attribute];
};


var setAttribute = function (target, attribute, value) {
    if (target.setAttribute) {
        target.setAttribute(attribute, value);
    } else {
        target[attribute] = value;
    }
};

var attribute = {
    getAttribute,
    setAttribute
};
