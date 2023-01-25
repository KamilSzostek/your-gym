export const nextWorkWeekDate = () => {
    const dayOfWeek = new Date().getDay();
    const numberOfDaysInWeek = 7;
    const firstDayOfNextWeek =
      Date.now() + (numberOfDaysInWeek - dayOfWeek + 1) * 24 * 60 * 60 * 1000;
    const lastDayOfNextWeek =
      Date.now() + (numberOfDaysInWeek - dayOfWeek + 5) * 24 * 60 * 60 * 1000;
    const date1 = new Date(firstDayOfNextWeek).toLocaleDateString();
    const date2 = new Date(lastDayOfNextWeek).toLocaleDateString();
    return `${date1} - ${date2}`;
  };