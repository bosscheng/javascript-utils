function getDayCountOfYear(year) {
    const isLeapYear = year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
    return isLeapYear ? 366 : 365;
}