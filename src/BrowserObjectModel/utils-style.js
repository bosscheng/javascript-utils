/*
* date: 2019-08-29
* desc:
*/
/**
 * @desc
 *      获取当前元素样式
 * @param oElm   元素对象
 * @param strCssRule   需要获取的css属性
 *
 * */
var getStyle = function (oElm, strCssRule) {
    var strValue = "";
    // 如果存在 defaultView 方法的话，且存在getComputedStyle方法
    if (document.defaultView && document.defaultView.getComputedStyle) {
        // getComputedStyle 获取对象的css属性的。 然后通过 getPropertyValue 获取属性｛key:value｝
        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
    }
    //
    else if (oElm.currentStyle) {
        strCssRule = strCssRule.replace(/\-(\w)/g, function (strMath, p1) {
            return p1.toUpperCase();
        });
        strValue = oElm.currentStyle[strCssRule];
    }
    //
    return strValue;
};
