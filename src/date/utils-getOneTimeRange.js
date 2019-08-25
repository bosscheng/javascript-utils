/*
* date: 2019-08-25
* desc:
*/
// 默认： 获取时间的 0点 24点时间。

const getOneTimeRange = (time, options) => {
    options = options || {};
    if (time) {
        time = parseInt(time, 10);
    } else {
        time = new Date();
    }

    let result = {
        start: 0,
        end: 0
    };

    let _startTime = new Date(time).setHours(options.startHour || 0, options.startMin || 0, 0, 0);
    let _endTime = new Date(time).setHours(options.endHour || 23, options.endMin || 59, 59, 0);
    result.start = new Date(_startTime).getTime();
    result.end = new Date(_endTime).getTime();

    return result;
};
