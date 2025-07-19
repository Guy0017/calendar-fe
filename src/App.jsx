import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [today, setToday] = useState(new Date());
  const [year, setYear] = useState(today.getFullYear());
  const [calendar, setCalendar] = useState({});
  const [locale, setLocale] = useState('en-GB');

  useEffect(() => {
    generateCalendar();
  }, []);

  function generateCalendar() {
    let workingDate = new Date(year, 0, 1);

    const newCalendar = { ...calendar };

    for (let i = 0; i < 12; i++) {
      const month = format(workingDate, locale, 'month');

      const data = {
        startingWeekday: format(workingDate, locale, 'weekday'),
        totalDays: new Date(year, i + 1, 0).getDate(),
      };

      newCalendar[year] ||= { [month]: data };
      newCalendar[year][month] = data;

      workingDate.setMonth(workingDate.getMonth() + 1);
    }

    setCalendar({ ...newCalendar });
  }

  return (
    <>
      <div>
        <h1>Year {year}</h1>
      </div>
      <div>
        {calendar[year] &&
          Object.keys(calendar[year]).map((keys) => {
            return (
              <ol key={`${keys + year}`}>
                <li>{keys}</li>
              </ol>
            );
          })}
      </div>
    </>
  );
}

function format(date, locale, option) {
  const format = {
    day: { day: 'numeric' },
    weekday: { weekday: 'long' },
    month: { month: 'long' },
    year: { year: 'numeric' },
  };

  return date.toLocaleDateString(locale, format[option]);
}

export default App;
