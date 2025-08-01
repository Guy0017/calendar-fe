import { useState, useEffect } from 'react';
import renderAdjustment from '../utils/renderAdjustment';

function CalendarDays({ month, year, calendar, today }) {
  const [renderCalendarDays, setRenderCalendarDays] = useState([]);

  useEffect(() => {
    const adjustedCalendarDays = renderAdjustment(month, year, calendar);

    setRenderCalendarDays(adjustedCalendarDays[month]['date']);
  }, [month]);

  return renderCalendarDays.map((weekday) => {
    const presentDay =
      year === today.getFullYear() &&
      month === today.getMonth() &&
      weekday.dayOfMonth === today.getDate();
    return (
      <>
        <p
          className={`dayNumber ${presentDay && 'today'}`}
          key={weekday + month + year}
        >
          {weekday['dayOfMonth']}
        </p>
      </>
    );
  });
}

export default CalendarDays;
