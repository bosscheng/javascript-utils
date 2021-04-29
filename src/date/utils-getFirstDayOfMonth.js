function getFirstDayOfMonth(date){
    const temp = new Date(date.getTime());
    temp.setDate(1);
    return temp.getTime();
}