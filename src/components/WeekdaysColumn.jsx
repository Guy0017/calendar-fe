import { useEffect, useState } from 'react';
import format from '../utils/format';

function Days({ locale, dateFrom }) {
  const [weekdaysHeading, setWeekdaysHeading] = useState([locale]);

  useEffect(() => {
    generateWeekdaysHeadings(locale);
  }, [locale, dateFrom]);

  function generateWeekdaysHeadings() {
    const localeWeekday = [];
    const workingDayDate = new Date(2024, 0, 1);

    while (localeWeekday.length < 7) {
      const formattedDay = format(workingDayDate, locale, 'weekday', dateFrom);

      localeWeekday.push(formattedDay);

      workingDayDate.setDate(workingDayDate.getDate() + 1);
    }

    setWeekdaysHeading(localeWeekday);
  }

  return (
    <>
      {weekdaysHeading.map((weekday) => {
        return (
          <h3 className="weekdayHeading" key={weekday}>
            {weekday}
          </h3>
        );
      })}
    </>
  );
}

export default Days;
