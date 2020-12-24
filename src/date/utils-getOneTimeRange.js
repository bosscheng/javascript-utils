/*
* date: 2019-08-25
* desc:
*/
// 默认： 获取时间的 0点 24点时间。

const getOneTimeRange = (time, options) => {
    let date;

    // 都为空的时候
    if (!time && !options) {
        date = new Date();
    } else if (Object.prototype.toString.call(time) !== '[object Date]' && time !== null && typeof time === 'object') {
        // time 为 options 参数。
        options = time;
        date = new Date();
    } else if (Object.prototype.toString.call(time) === '[object Date]') {
        // time 是时间格式
        date = time;
    } else {
        // time 是 int 格式。
        if (('' + time).length === 10) time = parseInt(time) * 1000;
        time = +time; // 转成int 型
        date = new Date(time);
    }
    options = options || {};

    let result = {
        start: 0,
        end: 0
    };

    let _startTime = new Date(date).setHours(options.startHour || 0, options.startMin || 0, 0, 0);
    let _endTime = new Date(date).setHours(options.endHour || 23, options.endMin || 59, 59, 0);
    result.start = new Date(_startTime).getTime();
    result.end = new Date(_endTime).getTime();

    return result;
};
