/*
* author: wancheng
* date: 2018-12-27
* desc:
*/


/**
 * 对于方法 getBoundingClientRect() 返回一个矩形对象， 含有四个属性  top right bottom left
 *
 * @param element
 * @returns {{top: number, left: number, bottom: number, right: number}}
 */
function gGetRect(element) {

    var rect = element.getBoundingClientRect();
    // 在IE中，默认坐标从(2,2)开始计算，导致最终距离比其他浏览器多出两个像素，我们需要做个兼容
    //
    var top = document.documentElement.clientTop; //  // 非IE为0，IE为2

    var left = document.documentElement.clientLeft; //  // 非IE为0，IE为2

    return {

        top: rect.top - top,

        bottom: rect.bottom - top,

        left: rect.left - left,

        right: rect.right - left

    }

}
