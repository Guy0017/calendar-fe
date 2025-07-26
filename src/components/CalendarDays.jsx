import { useState, useEffect } from 'react';
import renderAdjustment from '../utils/renderAdjustment';

function CalendarDays({ month, year, calendar }) {
  const [renderCalendarDays, setRenderCalendarDays] = useState([]);

  useEffect(() => {
    const adjustedCalendarDays = renderAdjustment(month, year, calendar);

    setRenderCalendarDays(adjustedCalendarDays[month]['date']);
  }, [month]);

  return renderCalendarDays.map((weekday) => {
    return (
      <>
        <p className="dayNumber" key={weekday + month + year}>
          {weekday['dayOfMonth']}
        </p>
      </>
    );
  });
}

export default CalendarDays;
