/*
* date: 2020-01-07
* desc:
*/
function toDate(date) {
    let _type = typeof date;
    let _str = '';
    let _date = null;

    // 如果没有传入值，则直接返回当前时间；
    if (!date) {
        return new Date();
    }
    // 如果是日期对象
    if (date instanceof Date) {
        return date;
    } else if (_type === 'number') {
        // 如果是传入的是数字，判断是否为合法的数字；
        _str = date.toString();

        if (_str.length === 13) {
            // 毫秒
            return new Date(date);
        } else if (_str.length === 10) {
            // 秒
            return new Date(date * 1000);
        }
        // throw new Error('toDate转换为时间对象时出错，请检查您的输入，date=' + date);
        console.error('toDate转换为时间对象时出错，请检查您的输入，date=' + date)
        return null;
    } else if (_type === 'string') {
        // 如果是 15:01 这样的时间，则需要特殊处理。
        if (/^[0-9]+:[0-9]+$/.test(date)) {
            const time = new Date();
            const year = time.getFullYear();
            const month = time.getMonth() + 1;
            const day = time.getDate();
            date = year + '-' + month + '-' + day + " " + date
        }

        // 如果是字符串，判断是否为合法的类似于时间的字符串；
        _date = date.replace(/[^\d\s:]+/g, '/');
    }
    _date = new Date(_date);


    let _timeDate = _date.getDate();

    if (_date.getTime() < 0) {
        return null;
    }

    // 检查日期
    if (typeof _timeDate === 'number' && _timeDate !== _timeDate) {
        // throw new Error('toDate转换为时间对象时出错，请检查您的输入，date=' + date);
        console.error('toDate转换为时间对象时出错，请检查您的输入，date=' + date)
        return null;
    }
    return new Date(_date);
}
