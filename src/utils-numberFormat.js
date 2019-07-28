/*
* date: 2019-07-28
* desc: 将数字字符串进行分割，支持字符串类型的数字
*/


function numberFormat(options) {
    var _options = options;
    // 如果是字符串,转换成对象
    if (Object.prototype.toString.call(options) === '[object String]') {
        _options = {
            number: options,
            length: 3,
            sep: ','
        }
    }
    var _number = String(options.number);
    var _len = parseInt(options.length, 10) || 3;
    var _sep = String(options.sep || '') || ',';
    var _curLen = 0;
    var _resultArr = [];
    var numberStringReg = /^\d+$/g;
    var clearFirstZeroReg = /^[+-]?0*/g;

    // 如果是0，则直接返回
    if (_number === '0' || _number === '-0' || _number === '+0') {
        return _number;
    }

    _number = _number.replace(clearFirstZeroReg, '');

    // 判断是否为合法的数字字符串；
    if (!numberStringReg.test(_number)) {
        throw new Error('numberFormat传入的number不是一个有效的整数！');
    }
    _curLen = _number.length;

    // 循环获取
    while (_curLen > _len) {
        _resultArr.unshift(_number.substr(_curLen - _len, _len));
        _curLen = _curLen - _len;
    }

    _resultArr.unshift(_number.substr(0, _curLen));

    return _resultArr.join(_sep);
}
