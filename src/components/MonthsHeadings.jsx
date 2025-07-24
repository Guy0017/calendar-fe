import { useState, useEffect } from 'react';

function Months({ year, locale }) {
  const [monthsHeadings, setMonthsHeadings] = useState([]);

  useEffect(() => {
    generateMonthsHeadings(year, locale);
  }, [locale]);

  function generateMonthsHeadings() {
    const localeMonths = [];
    const workingMonthDate = new Date(year, 0, 1);

    while (monthsHeadings.length < 12) {
      const formattedMonth = format(workingMonthDate, locale, 'month');

      localeMonths.push(formattedMonth);

      workingMonthDate.setMonth(workingMonthDate.getMonth() + 1);
    }

    setMonthsHeadings(localeMonths);
  }
}

export default Months;
