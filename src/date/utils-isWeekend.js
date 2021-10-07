function utilsIsWeekend(time) {
    const date = time ? new Date(time) : new Date();
    const day = date.getDay();
    // sun || sat
    return day === 0 || day === 6;
}