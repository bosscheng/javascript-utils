/*
* date: 2019-08-25
* desc: 获取${startTime} 到 ${endTime} 时间间隔内，${step} 间隔的时间数组
*/
const getMinuteRange = (startTime, endTime, step) => {
    let result = [];

    const _compareTime = function (time1, time2) {
        const value1 = _parseTime(time1);
        const value2 = _parseTime(time2);

        const minutes1 = value1.minutes + value1.hours * 60;
        const minutes2 = value2.minutes + value2.hours * 60;

        if (minutes1 === minutes2) {
            return 0;
        }

        return minutes1 > minutes2 ? 1 : -1;
    };

    const _parseTime = function (time) {
        const values = (time || '').split(':');
        if (values.length >= 2) {
            const hours = parseInt(values[0], 10);
            const minutes = parseInt(values[1], 10);

            return {
                hours,
                minutes
            };
        }
        /* istanbul ignore next */
        return null;
    };

    const _formatTime = function (time) {
        return (time.hours < 10 ? '0' + time.hours : time.hours) + ':' + (time.minutes < 10 ? '0' + time.minutes : time.minutes);
    };

    const _nextTime = function (time, step) {
        const timeValue = _parseTime(time);
        const stepValue = _parseTime(step);

        const next = {
            hours: timeValue.hours,
            minutes: timeValue.minutes
        };

        next.minutes += stepValue.minutes;
        next.hours += stepValue.hours;

        next.hours += Math.floor(next.minutes / 60);
        next.minutes = next.minutes % 60;

        return _formatTime(next);
    };

    if (startTime && endTime && step) {
        let current = startTime;
        while (_compareTime(current, endTime) <= 0) {
            result.push(current);
            current = _nextTime(current, step);
        }
    }

    return result;
};
