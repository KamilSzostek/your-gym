export const createDatesArray = () => {
    const dayOfWeek = new Date().getDay();
    const numberOfDaysInWeek = 7;
    const numberOfDaysInWorkWeek = 5;

    const daysArr = [];
    for (let index = 1; index <= numberOfDaysInWorkWeek; index++) {
        daysArr.push(new Date(Date.now() + (numberOfDaysInWeek - dayOfWeek + index) * 24 * 60 * 60 * 1000).toLocaleDateString())
    }
    return daysArr
}
