function format(date, locale, option, dateForm) {
  const format = {
    day: { day: 'numeric' },
    weekday: { weekday: dateForm },
    month: { month: 'long' },
    year: { year: 'numeric' },
  };

  return date.toLocaleDateString(locale, format[option]);
}

export default format;
