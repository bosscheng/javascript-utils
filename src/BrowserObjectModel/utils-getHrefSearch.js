/*
* date: 2019-08-29
* desc:
*/
/*
 * 获取url中的get参数
 * @param {Boolean} isNeedDecode 是否需要解码
 * @return {Object}
 * */
var getSearch = function (isNeedDecode = true) {
  // 分割
  var queryStr = window.location.href.split('?');
  var gets = [];
  var getArr = {};
  var tempArr;
  var key;
  if (queryStr[1]) {
    gets = queryStr[1].split('&');
    for (var i = 0; i < gets.length; i++) {
      tempArr = gets[i].split("=");
      key = tempArr[0];
      let value = '';
      if (tempArr.length === 2) {
        value = tempArr[1];
      } else {
        // 会存在 类似：xXZrc_HALCY= 这样的值，然后被split('=') 之后，就变成空字符了
        // xx=xXZrc=_HALCY= 这样的值 所以需要将剩下的值，重新基于 '=' 进行拼接
        tempArr.shift();
        value = tempArr.join('=');
      }
      if (isNeedDecode) {
        getArr[key] = decodeURIComponent(value);
      } else {
        getArr[key] = value;
      }

    }
  }

  return getArr;
};


/**
 * 获取url中的get参数
 * @param {Boolean} isNeedDecode 是否需要解码
 * @return {Object}
 * */
var getSearch2 = function (isNeedDecode = true) {
  var url = window.location.search; //获取url中"?"符后的字串
  var theRequest = {};
  // 判断是否有？号
  if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    var strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
      const splitArray = strs[i].split("=");
      const key = splitArray[0];
      let value = '';
      if (splitArray.length === 2) {
        value = splitArray[1];
      } else {
        // 会存在 类似：xXZrc_HALCY= 这样的值，然后被split('=') 之后，就变成空字符了
        // xx=xXZrc=_HALCY= 这样的值 所以需要将剩下的值，重新基于 '=' 进行拼接
        splitArray.shift();
        value = splitArray.join('=');
      }
      if (isNeedDecode) {
        theRequest[key] = decodeURIComponent(value);
      } else {
        theRequest[key] = value;
      }
    }
  }
  return theRequest;
};

/**
 * 获取url中的get参数
 *  @param {Boolean} isNeedDecode 是否需要解码
 *  @param {String} name 参数名
 *  @return {String}
 *
 * */
var getSearch3 = function (name, isNeedDecode = true) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");

  // search 是以?打头的。
  var r = window.location.search.substr(1).match(reg);

  if (r != null) {
    const value = r[2];
    if (isNeedDecode) {
      return decodeURIComponent(value);
    }
    return value;
  }
  return null;
};


