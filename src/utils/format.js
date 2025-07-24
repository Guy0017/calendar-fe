function format(date, locale, option) {
  const format = {
    day: { day: 'numeric' },
    weekday: { weekday: 'long' },
    month: { month: 'long' },
    year: { year: 'numeric' },
  };

  return date.toLocaleDateString(locale, format[option]);
}

export default format;
