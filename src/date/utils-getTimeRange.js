/**
 *
 * @param startTime
 * @param endTime
 * @desc 获取 ${startTime} 到 ${endTime} 之间，时间范围(一天一间隔)
 * @returns {[]}
 */
export function getTimeRange(startTime, endTime) {

    var result = [];
    var oneDay = 3600 * 1000 * 24;
    var _startTime = new Date(startTime).setHours(0, 0, 0, 0);
    var _endTime = new Date(endTime).setHours(0, 0, 0, 0);

    if (_endTime > _startTime) {
        var subResult = _endTime - _startTime;
        var dayNum = subResult / oneDay;

        result.push(_startTime);
        //
        for (var i = 1; i < dayNum; i++) {
            var tempDay = _startTime + (i * oneDay);
            result.push(tempDay);
        }
        result.push(_endTime);
    }
    return result;
}
