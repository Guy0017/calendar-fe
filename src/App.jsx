import { useEffect, useState } from 'react';
import './App.css';
import format from './utils/format';
import Header from './components/Header';
import WeekdaysColumn from './components/WeekdaysColumn';
import CalendarDays from './components/CalendarDays';

function App() {
  const [today, setToday] = useState(new Date());
  const [year, setYear] = useState(today.getFullYear());
  const [calendar, setCalendar] = useState({});
  const [locale, setLocale] = useState('en-GB');
  const [renderMonths, setRenderMonths] = useState([]);

  useEffect(() => {
    generateCalendar();
    generateHeadings();
  }, [year, locale]);

  useEffect(() => {}, [calendar]);

  function generateHeadings() {
    const localeMonths = [];

    const workingMonthDate = new Date(year, 0, 1);

    for (let i = 0; i < 12; i++) {
      const formattedMonth = format(workingMonthDate, locale, 'month');

      localeMonths.push(formattedMonth);

      workingMonthDate.setMonth(workingMonthDate.getMonth() + 1);
    }

    setRenderMonths(localeMonths);
  }

  function generateCalendar() {
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);

    const newCalendar = {};

    while (startDate <= endDate) {
      const month = startDate.getMonth();

      const data = {
        dayOfMonth: startDate.getDate(),
        weekday: format(startDate, locale, 'weekday'),
        month: format(startDate, locale, 'month'),
        year,
      };

      newCalendar[year] ||= {};
      newCalendar[year][month] ||= {
        totalDays: new Date(year, month + 1, 0).getDate(),
        firstWeekday: startDate.getDay(),
        date: [],
      };

      newCalendar[year][month]['date'].push(data);

      startDate.setDate(startDate.getDate() + 1);
    }

    setCalendar(newCalendar);
  }

  return (
    <main>
      <Header year={year} setYear={setYear} setLocale={setLocale}/>

      <div className="months-container">
        {calendar[year] &&
          renderMonths.map((month, index) => {
            return (
              <div className="month-container" key={month + year}>
                <h2 className="month-title">{month}</h2>

                <WeekdaysColumn locale={locale} />
                <CalendarDays month={index} year={year} calendar={calendar} />
              </div>
            );
          })}
      </div>
    </main>
  );
}

export default App;
