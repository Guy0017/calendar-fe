import { useEffect } from 'react';
import UserInputSettings from './UserInputSettings';

function Header({ year, setYear, setLocale, setDateForm }) {
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

        <UserInputSettings setLocale={setLocale} setDateForm={setDateForm} />
      </div>
    </>
  );
}

export default Header;
