import { useEffect } from 'react';
import LocaleInput from './LocaleInput';

function Header({ year, setYear, setLocale }) {
  useEffect(() => {}, [year]);

  const header = `Calender Year ${year}`;

  return (
    <>
      <div className="header-container">
        <button onClick={() => setYear(year - 1)} className="button-prev">
          Prev
        </button>
        <header>
          <h1>{header}</h1>
        </header>
        <button onClick={() => setYear(year + 1)} className="button-next">
          Next
        </button>

        <LocaleInput setLocale={setLocale} />
      </div>
    </>
  );
}

export default Header;
