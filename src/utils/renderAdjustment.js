function renderAdjustment(month, year, calendar) {
  const calendarMonths = JSON.parse(JSON.stringify(calendar[year]));

  const weekdayAdjustment = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    6: 5,
    0: 6,
  };

  const emptySpace = '';

  const firstWeekday = calendarMonths[month]['firstWeekday'];
  let adjustment = weekdayAdjustment[firstWeekday];

  while (adjustment > 0) {
    calendarMonths[month]['date'].unshift(emptySpace);
    adjustment--;
  }

  return calendarMonths;
}

export default renderAdjustment;
